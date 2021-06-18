import React, { Component } from "react";

export default class Post extends Component {

    state= {
        id:"",
        title:"",
        body:"",
    }

    componentDidMount() {
        const id = this.props.match.params.id;
    
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("Data", data);
            this.setState({
              id: data.id,
              title: data.title,
              body: data.body,
            });
          })
          .catch((error) => console.log(error));

  render() {
    return 
        <div>
             <h1>{this.state.title}</h1>
             <h2>This is a blog #{this.state.id}</h2>
             <h2>{this.state.Body}</h2>
        </div>
  }
}