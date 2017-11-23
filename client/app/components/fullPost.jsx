import React from 'react';

const FullPost = (props) => (
  <div className="container p-t-md">
    <div className="row">
      <div className="col-md-12">
        <ul className="list-group media-list media-list-stream">
          <li className="media list-group-item p-a">
            <h2> {props.fullPost.title} </h2>
            <span>{props.fullPost.subtitle} </span>
            <div className="media-heading">
              <small className="text-muted">{props.fullPost.location} </small>
            </div>
            <p> {props.fullPost.text} </p>
            <span> IMAGES HERE</span>
            <h5> by {props.fullPost.author} </h5>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default FullPost;
