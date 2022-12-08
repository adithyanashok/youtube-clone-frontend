import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme, LightTheme } from "./utils/Theme";
import { useState } from "react";
import {useSelector} from 'react-redux'
import {
  Navigate,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import axios from 'axios'
import Search from "./pages/Search";

const Container = styled.div`
  display:flex;
`
const Main = styled.div`
  flex:7;
  background-color:${({theme}) => theme.bg};
`
const Wrapper = styled.div`
 padding:22px 36px;
`

axios.defaults.withCredentials = true
 
function App() {
  const {currentUser} = useSelector((state) => state.user)
  const [darkMode, setDarkMode] = useState(true)
  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>

    <Container>
      <BrowserRouter>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main>
        <Navbar/>
        <Wrapper>
          <Routes>
            <Route path='/'>
              <Route index element={<Home type="random" />}  />
              <Route path="trends" element={<Home type="trend"/>}  />
              <Route path="subsciption" element={<Home type="sub"/>}  />
              <Route path="search" element={<Search/>}  />
            
              <Route path="signin" element={currentUser ? <Navigate to='/' /> : <SignIn/>} />

              <Route path='videos'>
                <Route path=':id' element={<Video />} />
              </Route>
            </Route>
          </Routes>
        </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
