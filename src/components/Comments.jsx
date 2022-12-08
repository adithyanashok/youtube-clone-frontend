import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'
import {useEffect, useState} from 'react'
// import axios from 'axios'
import {useSelector} from 'react-redux'
import { makeRequest } from '../axios'


const Container = styled.div``
const NewComment = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
`
const Avatar = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
`
const Input = styled.input`
    border:none;
    border-bottom:1px solid ${({theme}) => theme.soft};
    background-color:transparent;
    outline:none;
    padding:5px;
    width:100%;
    color:${({theme}) => theme.text};
`

function Comments({videoId}) {
    const [comments, setComments] = useState([]);
    const [desc, setPostComment] = useState();
  const  {currentUser} = useSelector((state) => state.user);
    
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const videoRes = await makeRequest.get(`/comments/${videoId}`);
        setComments(videoRes.data);
        console.log(videoRes.data)
      } catch (err) {
        console.log(err)
      }
    };
    fetchComments();
  }, [videoId]);
  const handleClick = async () => {
    try{
      const postComment = await makeRequest.post('/comments/', {desc, videoId})
      console.log(postComment.data)
      window.location.reload() 
    }catch(err){
      console.log(err)
    }
  }
  return (
    <Container>
        <NewComment>
            <Avatar src={currentUser?.img} />
            <Input placeholder='Add a comments' onChange={(e) => setPostComment(e.target.value)} />
            <button onClick={handleClick} >Post</button>
        </NewComment>
        {comments.map(comment=>(
        <Comment key={comment._id} comment={comment}/>
      ))}
    </Container>
  )
}

export default Comments