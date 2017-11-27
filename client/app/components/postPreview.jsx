import React from 'react';
import moment from 'moment';

// onClick render to fullPost page
const PostPreview = (props) => (
  <li className="media list-group-item p-a" >
    <div className="media-left">
      <div
        className="preview"
        style={{backgroundImage: "url(" + 'https://wanderworld360.com/wp-content/uploads/2016/07/the-merlion-singapore-wallpaper.jpg' + ")"}}
        onClick={() => {
          props.setFullPost(props.post);
          props.changeView('post');
        }}>
      </div>
    </div>
    <div className="media-body">
      <div className="media-heading">
        <h3 onClick={() => {
          props.setFullPost(props.post);
          props.changeView('post');
        }} > {props.post.title} </h3>
        <span>{props.post.subtitle} </span>
      </div>
      <small className="location">{props.post.location} </small>
      <br></br>
      <small className="text-muted">{moment(props.post.createdAt).startOf().fromNow()}</small>
      <p>{props.post.text.substring(0, 300)}&nbsp;&nbsp;[...] </p>
      <h5>by {props.post.google_name 
        ? props.post.google_name 
        : props.post.author} 
      </h5>
      <div>
        {props.post.google_avatar 
          ? <img style={{maxHeight: '40px'}} src={props.post.google_avatar}/> 
          : <img style={{maxHeight: '40px'}} src={props.post.avatar}/>}
      </div>
    </div>
  </li>
);

export default PostPreview;
