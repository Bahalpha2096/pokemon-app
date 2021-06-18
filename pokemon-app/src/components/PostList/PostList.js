import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          posts: data,
        });
      });
  }

  render() {
    const postList = this.state.posts.map((posts, index) => {
      return (
        <div>
       

          <li key={`${posts.name}-${index}`}><Link to={`/posts/${posts.id}`}>{posts.title}
          </Link></li>

        </div>
      );
    });

    return (
      <div>
        <h2>Here are our List of post</h2>
        <ul>{postList}</ul>
      </div>
    );
  }
}
