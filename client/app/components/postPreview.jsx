import React from 'react';

const postPreview = (props) => (
  <div >
    <h3> {props.post.title} </h3>
    <br/>
    <h3> Author: {props.post.author} </h3>
    <br/>
    <span> Location: {props.post.location} </span>
    <br/>
    <span> Subtitle: {props.post.subtitle} </span>
    <br/>
    <span> {props.post.main.substring(0, 50)} </span>
    <br/>
    <span> Add images as background </span>
  </div>

);

export default postPreview;