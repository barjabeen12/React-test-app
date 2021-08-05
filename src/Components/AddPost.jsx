import React,{useState} from 'react'
import {Container, Form, Button, Alert} from "react-bootstrap"
import styled from "styled-components";
function AddPost() {
    const [Title, setTitle]= useState();
    const [body, setbody]= useState();
    const [validate, setvalidate] = useState(false);
    const [validated, setValidated] = useState(false);

  const [error, setError] = useState();
    const handleClick = (event) =>{
        event.preventDefault();
        const form = event.currentTarget;
        
    if (form.checkValidity() === false) {
      
      event.stopPropagation();
      
    }
    if(Title !=null && body!=null){
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
    .then((response) => {response.json()
        setvalidate(true)
    })
    .then((json) => console.log(json))
    

    }

    setValidated(true);

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
            <Form noValidate validated={validated} onSubmit={handleClick}>  
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
         <Form.Label>Title</Form.Label>
            <Form.Control required type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Body</Form.Label>
            <Form.Control required as="textarea" rows={3} placeholder="Body" onChange={(e) => setbody(e.target.value)}  />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
            <Button type="submit" className="mb-3" style={{marginTop:"30px "}}>
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