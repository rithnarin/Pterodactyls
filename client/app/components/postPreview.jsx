import React from 'react';
import moment from 'moment';

// onClick render to fullPost page
const PostPreview = (props) => (
  <li className="media list-group-item p-a" >
    <div className="media-left">
      <div
        className="preview"
        style={{backgroundImage: "url(" + props.post.pics + ")"}}
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
      <div>
        <div className='pull-left'>
          {props.post.google_avatar
            ? <img className="img-circle media-object" src={props.post.google_avatar}/>
          : <img className="img-circle media-object" src={props.post.avatar}/>}
        </div>
        <h5>
          {props.post.google_name
          ? props.post.google_name
          : props.post.author}
        </h5>
      </div>
    </div>
  </li>
);

export default PostPreview;
