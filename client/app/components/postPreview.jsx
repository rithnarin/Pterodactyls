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
              props.changeView('post')}}>
          </div>
        </div>
        <div className="media-body">
          <div className="media-heading">
            <h3 onClick={() => {
                props.setFullPost(props.post);
                props.changeView('post');
              }} > {props.post.title} </h3>
              <small className="pull-right text-muted">{moment(props.post.createdAt).startOf().fromNow()}</small>
              <span>{props.post.subtitle} </span>
          </div>
          <small className="text-muted">{props.post.location} </small>
          <p>{props.post.text.substring(0, 300)}&nbsp;&nbsp;[...] </p>
          <h5>by {props.post.author} </h5>
        </div>
      </li>
);

export default PostPreview;
