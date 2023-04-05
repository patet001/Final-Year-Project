import React, { Component } from 'react';

class Main extends Component {


  /* For viewing posts from 1 profile, not functional


  postFilter(filter){
    return(
      <div id = "content">
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
              if(post.Name = filter){
                return(
                  <tr key={key}>
                    <th scope="row">{post.id.toString()}</th>
                    <td>{post.name}</td>
                    <td>{post.content}</td>
                    <td>{post.poster}</td>
                    
                    <td><button className="likeButton">Like</button></td>
                  </tr>
  
                )

              }
            })}

          </tbody>

        </table>
      </div>
    )


  }*/


  render() {
    return (
      <div id="content">
        {/*Add Posts*/}
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
        {/*View Posts*/}
        <h2>View Posts</h2>




        {/*Filter Posts
        
        
        Not functional


        <form
          onSubmit={(event)=>{
            event.preventDefault()
            const filter = this.filterIn.value
            
            this.postFilter(filter)         


          }}>
            <div>
              <input
                id="filterIn"
                type="text"
                className='form-control'
                placeholder='Search User'
                ref={(input)=>{this.filterIn = input}}
                />
            </div>
        
            <button type='submit' className='btn btn-primary'>Filter</button>
        </form>*/}




      
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
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
