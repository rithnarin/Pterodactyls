import React from 'react';

var devStyle = {
  border: '1px dotted blue',
  padding: '10px',
  margin: '20px'
};

const PostPreview = (props) => (
  <div style={devStyle} >
    <h3> {props.post.title} </h3>
    <hr/>
    <h4> Author: {props.post.author} </h4>
    <hr/>
    <span> Location: {props.post.location} </span>
    <hr/>
    <span> Subtitle: {props.post.subtitle} </span>
    <hr/>
    <span> Text: {props.post.text.substring(0, 200)}&nbsp;&nbsp;[...] </span>
    <hr/>
    <span> Add images as background </span>
  </div>

);

export default PostPreview;
