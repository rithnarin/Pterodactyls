import React from 'react';

const FullPost = (props) => (
  <div>
    <h1> {props.fullPost.title} </h1>
    <br/>
    <h1> Author: {props.fullPost.author} </h1>
    <br/>
    <span> Location: {props.fullPost.location} </span>
    <br/>
    <span> Subtitle: {props.fullPost.subtitle} </span>
    <br/>
    <span> {props.fullPost.text} </span>
    <br/>
    <span> IMAGES HERE</span>
  </div>

);

export default FullPost;
