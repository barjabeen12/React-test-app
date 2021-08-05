import React,{useState} from 'react'
import {Container, Form, Button, Alert} from "react-bootstrap"
import styled from "styled-components";
function AddPost() {
    const [Title, setTitle]= useState();
    const [body, setbody]= useState();
    const [validate, setvalidate] = useState(false);
  const [error, setError] = useState();
    const handleClick = () =>{
        
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
    body: JSON.stringify({
        title: `${Title}`,
        body: `${body}`,
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then(setvalidate(true));




    }
    return (
        <Container>
            <Content>
            <h1>Create New Post</h1>
            {error && (
            <Alert  variant="danger">
            {error}
            </Alert>
            )}
            {validate && (
            <Alert  variant="success">
            Added Successfully
            </Alert>
      
            )}
            <Form>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
         <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Body</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Body" onChange={(e) => setbody(e.target.value)} />
        </Form.Group>
            <Button className="mb-3" style={{marginTop:"30px "}} onClick={handleClick}>
            Submit
            </Button>
            </Form>
            </Content>
        </Container>
    )
}

export default AddPost
const Content = styled.div`
margin-top: 5%;
width: 100%;
height: 500px;
h1{
    margin-bottom: 40px;
}

`