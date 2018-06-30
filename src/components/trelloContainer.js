import React from 'react';
import axios from 'axios';
import TrelloBox from './trelloBox'
import { Button, Container, Col,  Row,  } from 'reactstrap';


class TrelloContainer extends React.Component {



 state = {
    posts: []
  }

  

  componentDidMount() {
    this.getPosts()
  }

  getPosts = async () => {
    axios.get('http://localhost:3000/api/v1/posts.json')
    .then(response => {
      console.log(response)
      this.setState({
        posts: response.data
      })
    })
    .catch(error => console.log(error))
  

    
  }

  addNewPost = () => {
    console.log('clicked')

    axios.post('http://localhost:3000/api/v1/posts.json', {post: {title: "", body: ""}})
    .then(response => {
      console.log(response)
      let post = {...this.state.posts};
      this.setState({
        posts: post
      })
    })
  }


  render() {
    return (
      <div>
        <Container>
       
          <Row>
            <Col md="12">
              <Button onClick={this.addNewPost}>Add +</Button>
            </Col>
              {
                this.state.posts.map((post) => {
                  return (
                    
                      <TrelloBox key={post.id} post={post} />
                  
                  )
                })
              }
          
          </Row>
        </Container>
      </div>
      
    );
  }
}

export default TrelloContainer;
