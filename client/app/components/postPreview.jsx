import React from 'react';

// onClick render to fullPost page
const PostPreview = (props) => (
      <li className="media list-group-item p-a">
        <div className="media-body" >
          <h3 onClick={() => {
            props.setFullPost(props.post);
            props.changeView('post');
          }}> {props.post.title} </h3>
          <span>{props.post.subtitle} </span>
          <div className="media-heading">
            <small className="text-muted">{props.post.location} </small>
          </div>
          <p> Text: {props.post.text.substring(0, 200)}&nbsp;&nbsp;[...] </p>
          <h5>by {props.post.author} </h5>
          <span> Add images as background </span>
        </div>
      </li>
);

export default PostPreview;
