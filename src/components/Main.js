import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <div id="content">
        <h1>Add Post</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.postName.value
          const content = this.postContent.value
          this.props.createPost(name, content)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="postName"
              type="text"
              ref={(input) => { this.postName = input }}
              className="form-control"
              placeholder="Post Name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="postContent"
              type="text"
              ref={(input) => { this.postContent = input }}
              className="form-control"
              placeholder="Post Content"
              required />
          </div>
          <button type="submit" className="btn btn-primary">Add Post</button>
        </form>
        <p> </p>
        <h2>View Posts</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Content</th>
              <th scope="col">Poster</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="postList">
            {this.props.posts.map((post,key)=>{
              return(
                <tr key={key}>
                  <th scope="row">{post.id.toString()}</th>
                  <td>{post.name}</td>
                  <td>{post.content}</td>
                  <td>{post.poster}</td>
                  
                  <td><button className="likeButton">Like</button></td>
                </tr>

              )
            })}

          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
