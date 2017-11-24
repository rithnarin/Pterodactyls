import React from 'react';

// onClick render to fullPost page
const PostPreview = (props) => (
      <li className="media list-group-item p-a" >
        <div className="media-left">
          <div
            className="preview"
            style={{backgroundImage: "url(" + 'https://wanderworld360.com/wp-content/uploads/2016/07/the-merlion-singapore-wallpaper.jpg' + ")"}}
            onClick={() => {
              props.setFullPost(props.post);
              props.changeView('post')}}>
          </div>
        </div>
        <div className="media-body">
          <h3 onClick={() => {
            props.setFullPost(props.post);
            props.changeView('post');
          }}> {props.post.title} </h3>
          <span>{props.post.subtitle} </span>
          <div className="media-heading">
            <small className="text-muted">{props.post.location} </small>
          </div>
          <p>{props.post.text.substring(0, 300)}&nbsp;&nbsp;[...] </p>
          <h5>by {props.post.author} </h5>
        </div>
      </li>
);

export default PostPreview;
