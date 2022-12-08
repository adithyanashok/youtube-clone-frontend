import React from 'react'
import styled from 'styled-components'
import YtLogo from '../img/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"
import { logout } from '../redux/userSlice';
import {useDispatch} from 'react-redux'
const Container = styled.div`
    flex:1;
    background-color: ${({ theme }) => theme.bgLighter};
    height:170vh;
    color:${({ theme }) => theme.text};
    font-size:14px;
    position:sticky;
    top:0;
    @media screen and (max-width: 995px) {
        display: none;
      }
`
const Wrapper = styled.div`
    padding:18px 26px;
`
const Logo = styled.div`
    display:flex;
    align-items:center;
    gap:5px;
    font-weight:bold;
    margin-bottom:25px;
`
const Img = styled.img`
 height:25px;
`
const Item = styled.div`
    display:flex;
    align-items:center;
    gap:5px;
    cursor:pointer;
    padding:7.5px 0px;

    &:hover{
        background-color:${({ theme }) => theme.soft};
    }
`
const Hr = styled.hr`
    margin:15px 0px;
    border:0.5px solid ${({ theme }) => theme.soft};
`
const Login = styled.div``
const Button = styled.button`
    padding:5px 15px;
    background-color:transparent;
    border:1px solid #3ea6ff;
    color:#3ea6ff;
    border-radius:3px;
    font-weight:500;
    margin-top:10px;
    cursor:pointer;
    display:flex;
    align-items:center;
    gap:5px;
`
const Title = styled.h2`
    font-size:14px;
    font-weight:500;
    color:#aaaaaa;
    margin-bottom:20px;
`

function Menu({ darkMode, setDarkMode }) {
    const navigate = useNavigate()
    const { currentUser } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const logoutFunction =() =>{
        dispatch(logout())
        navigate("/")
    }

    return (
        <Container>
            <Wrapper>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Logo>
                        <Img src={YtLogo} />
                        YouTube
                    </Logo>
                </Link>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }} >
                <Item>
                    <HomeIcon />
                    Home
                </Item>
                </Link>
                <Link to="subsciption" style={{ textDecoration: "none", color: "inherit" }} >

                    <Item>
                        <SubscriptionsOutlinedIcon />
                        Subscription
                    </Item>
                </Link>
                <Hr />
                <Link to="trends" style={{ textDecoration: "none", color: "inherit" }} >
                    <Item>
                        <ExploreOutlinedIcon />
                        Explore
                    </Item>
                </Link>
                <Item>
                    <LibraryAddOutlinedIcon />
                    Library
                </Item>

                <Item>
                    <ExploreOutlinedIcon />
                    Explore
                </Item>
                <Item>
                    <HistoryOutlinedIcon />
                    History
                </Item>
               
                <Hr />
                 {!currentUser && <Login>
                    Sign in to like videos, comments, and subscibe.
                    <Link to="signin" style={{ textDecoration: "none" }} >
                        <Button><AccountCircleOutlinedIcon /> Sign In</Button> 
                    </Link>
                     </Login >}
                    <Hr />
                    <Title>BEST OF YOUTUBE</Title>
                    <Item>
                        <LibraryMusicOutlinedIcon />
                        Music
                    </Item>
                    <Item>
                        <SportsBaseballOutlinedIcon />
                        Sports
                    </Item>
                    <Item>
                        <SportsEsportsOutlinedIcon />
                        Gaming
                    </Item>
                    <Item>
                        <MovieCreationOutlinedIcon />
                        Movies
                    </Item>
                    <Item>
                        <NewspaperOutlinedIcon />
                        News
                    </Item>
                    <Item>
                        <LiveTvOutlinedIcon />
                        Live
                    </Item>
                    <Hr />

                    <Item>
                        <SettingsOutlinedIcon />
                        Settings
                    </Item>
                    <Item>
                        <OutlinedFlagIcon />
                        Report
                    </Item>
                    <Item>
                        <HelpOutlineOutlinedIcon />
                        Help
                    </Item>
                    <Item onClick={() => setDarkMode(!darkMode)} >
                        <LightModeOutlinedIcon />
                        {darkMode ? "Light" : "Dark"} Mode
                    </Item>

                    {currentUser && <Item onClick={logoutFunction} >
                        <LogoutIcon />
                        Log Out
                    </Item>}
                </Wrapper>
    </Container>
    )
}

export default Menu