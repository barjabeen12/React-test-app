import React from 'react'
import {Card, Button} from "react-bootstrap"
import { useHistory} from "react-router-dom";
import axios from 'axios';

function PostCard(props) {
    const { idx ,id, title, body } = props.data;
    const history = useHistory();
    const handleDelete = ()=>{
        var config = {
            method: 'delete',
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            history.push('/addpost');
            history.push('/');
            
           })
        
    }
    return (
        <Card style={{ maxHeight: '400px' ,marginTop:"20px"}}>
        <Card.Header >{id}</Card.Header>
        <Card.Body>
          <h2>{title}</h2>
          <Card.Text>
          {body}
          </Card.Text>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    )
}

export default PostCard
