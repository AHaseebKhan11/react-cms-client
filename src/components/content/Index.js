import React, { Component } from 'react'
import axios from 'axios'

class ContentIndex extends Component {

  constructor(props) {
    console.log('mount');
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/contents.json')
    .then(response => {
      this.setState({posts: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post, id) => {
          return(
            <div className="tile" key={id} >
              <center>
                <div className='display-inline'><h2>{post.title}</h2></div>
                <br/>
                <div className='display-inline'>
                  {post.title}
                  &nbsp;&nbsp;&nbsp;
                  {post.published_date}
                </div>
                <br/>
                <div className='col-sm-12'>
                  <div className='col-sm-2'></div>
                  <div className='col-sm-8'>
                    <p className='display-inline'><strong>Summary~</strong>{post.summary}</p>
                    <br/>
                    <p className='display-inline'><strong>Content~</strong>{post.content}</p>
                  </div>
                  <div className='col-sm-2'></div>
                </div>
              </center>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ContentIndex