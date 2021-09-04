import React from 'react';
import Nav from "./Components/Nav"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import Footer from "./Components/Footer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Posts from "./Components/Posts";
import AddPost from "./Components/AddPost"
import ImageUploading from 'react-images-uploading';
import {Container, Row, Col} from "react-bootstrap"
import styled from 'styled-components';
import { Button } from 'bootstrap';
function App() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 20;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div>
      <Nav/>
    </div>
  );
}

export default App;
const UploadImage  =styled.div`
position: absolute;

`
const Buttons = styled.div`
position: relative;
left:175px;
i{
  cursor: pointer;
}

`