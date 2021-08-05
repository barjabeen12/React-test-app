import React, { useState, useEffect,useMemo } from "react";
import {Container, Row, Col, Button} from "react-bootstrap"
import PostCard from "./Card"
import styled from "styled-components";
import { Grid, CircularProgress } from "@material-ui/core";
import Pagination from "./Pagination"
function Posts() {
    const [posts, setPosts] = useState();
    const [pages, setPages] = useState();
    useEffect(() => {
        let mounted = true;
        if(mounted){
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setPosts(json);
                

            });
          
        }
          
          return () => mounted = false;
          },[] );
    return (
        <Container>
            <h2 style={{marginTop:"40px"}}>Current Posts</h2>
            <Content>
             
            {
                posts ? (
                    <Row >
                    {posts.length > 0 ? (
                     <>
                    <Pagination
                    data={posts}
                    RenderComponent={PostCard}
                    title="Posts"
                    pageLimit={5}
                    dataLimit={10}
                     />
                    </>
      ) : (
       <h1>No Posts to display</h1>
      )}
                    </Row>
                  
                ):(
                    <Container>
                         <CircularProgress disableShrink />
                    </Container>
                )
            }
                  
         
                  
        
         </Content>
        
        </Container>
    )
}

export default Posts
const Content = styled.div`
margin-top: 1%;
margin-bottom:5%;
display: flex;
justify-content: center; 
`
