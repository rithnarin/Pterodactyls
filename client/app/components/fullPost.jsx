import React from 'react';

const FullPost = (props) => (
  <div >
    <h1> {this.props.fullPost.title} </h1>
    <br/>
    <h1> Author: {this.props.fullPost.author} </h1>
    <br/>
    <span> Location: {this.props.fullPost.location} </span>
    <br/>
    <span> Subtitle: {this.props.fullPost.subtitle} </span>
    <br/>
    <span> {this.props.fullPost.main} </span>
    <br/>
    <span> IMAGES HERE</span>
  </div>

);

export default FullPost;