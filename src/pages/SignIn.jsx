// import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'
import {auth, provider} from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { makeRequest } from '../axios'
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height: calc(100vh - 56px);
    color:${({theme}) => theme.text};
`
const Wrapper = styled.div`
    display:flex;
    align-items:center;
    flex-direction: column;
    background-color:${({theme}) => theme.bgLighter};
    border: 1px solid ${({theme}) => theme.soft};
    gap:10px;
    padding:10px 50px;
`
const Title = styled.h1`
    font-size:22px;
`
const SubTitle = styled.h2`
    font-size:20px;
    font-weight:300;

`
const Input = styled.input`
border:1px solid ${({theme}) => theme.soft};
    border-radius:3px;
    padding:10px;
    background-color:transparent;
    outline:none;
    width:100%;
    color: ${({theme}) => theme.textSoft};
    &::placeholder {
        color: ${({theme}) => theme.textSoft};
`
const Button = styled.button`
    border:none;
    border-radius:3px;
    padding:10px 20px;
    font-weight:500;
    cursor:pointer;
    background-color: ${({theme}) => theme.soft};
    color: ${({theme}) => theme.textSoft};
`
const More = styled.div`
    display:flex;
    font-size:10px;
    margin-top:10px;
    color: ${({theme}) => theme.textSoft};
`
const Links = styled.div`
    margin-left:50px;
`
const Link = styled.span`
    margin-left:20px;
`
function SignIn() {
    const [name, setName] = useState({})
    const [email, setEmail] = useState({})
    const [password, setPassword] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()
   const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(loginStart())
   
    try {
      const res = await makeRequest.post("/auth/signin", { email, password }
      );
      dispatch(loginSuccess(res.data));
      navigate("/")
    } catch (err) {
      dispatch(loginFailure());
    }
  };
  const signinWithGoogle = async () =>{
    dispatch(loginStart())
    signInWithPopup(auth, provider).then((result) => {
        console.log(result)
        makeRequest.post('/auth/google', {
            name:result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL

        }).then((res) => {
            dispatch(loginSuccess(res.data))
        })
    }).catch((err) => {
        dispatch(loginFailure())
        console.log(err)
    })
  }
  const signUp = async () => {
    dispatch(loginStart())
    try{
        const res = await makeRequest.post('/auth/signup',{name, email, password})
        console.log(res)
        dispatch(loginSuccess(res.data))
        navigate("/")
    }catch(err){
        console.log(err)
    }
  }
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <SubTitle>to continue YouTube</SubTitle>
            <Input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleLogin} >Sign In</Button>
            <Title>or</Title>
            <Button onClick={signinWithGoogle} >Sign in with google</Button>
            <Title>or</Title>

            <Input placeholder='username' onChange={(e) => setName(e.target.value)} />
            <Input placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={signUp} >Sign up</Button>
        </Wrapper>
        <More>
            ENGLISH(US)
            <Links>
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
            </Links>
        </More>
    </Container>
  )
}

export default SignIn