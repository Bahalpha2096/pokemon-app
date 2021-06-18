import React, { Component } from "react";

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
          <li key={`${posts.id}-${index}`}>{posts.id}</li>
          <li key={`${posts.name}-${index}`}>{posts.title}</li>

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
