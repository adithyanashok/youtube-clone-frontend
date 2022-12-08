// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { makeRequest } from '../axios'
import Card from './Card'
const Container = styled.div`
    flex:2;
`
function Recommendation({tags}) {
    console.log(tags)
    const [videos, setVideos] = useState([])
    useEffect(() => {
        const fetchVideos = async () => {
        const res = await makeRequest.get(`/videos/tags?tags=${tags}`); 
            setVideos(res.data)
        }
        fetchVideos()
    }, [tags])
  return (
    <Container>
        {videos.map((video) => (
            <Card type="sm" key={video._id} video={video} />
        ))}
    </Container>
  )
}

export default Recommendation