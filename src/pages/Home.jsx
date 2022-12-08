import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
// import axios from "axios";
import { makeRequest } from "../axios";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 995px) {
    display: none;
  }
`;
const Alert = styled.h1`
  color: #fff;
  display: flex;
  justify-content: center;
  display: none;
  @media screen and (max-width: 995px) {
    display: block;
  }
`;

const Home = ({type}) => {
  console.log(type)
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await makeRequest.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <>
    <Alert>Please Open in desktop screen it's not responsive in small devices</Alert>
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video}/>
      ))}
    </Container>
    </>
  );
};

export default Home;