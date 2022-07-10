import React from 'react';
import axios from 'axios';

export default class PostList extends React.Component { // class-based Component
  
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://threeinarowpuzzle.herokuapp.com/sample`)
      .then(res => {
        const sample = res.data;
        this.setState({ sample });
      })
  }

  render() {
    return (
      <div>
        <h2>List of Posts</h2>
        <ul>
            {
            this.state.posts
                .map(post =>
                <li key={post.id}>{post.title}</li>
                )
            }
        </ul>
      </div>
    )
  }
}