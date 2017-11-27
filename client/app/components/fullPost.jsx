import React from 'react';
import moment from 'moment';

const FullPost = (props) => (
  <div className="container p-t-md">
    <div className="row">
      <div className="col-md-12">
        <ul className="list-group media-list media-list-stream">
          <li className="media list-group-item p-a">
            <h2> {props.fullPost.title} </h2>
            <span>{props.fullPost.subtitle} </span>
            <div className="media-heading">
              <small className="location">{props.fullPost.location} </small>
              <br></br>
              <small className="text-muted">{moment(props.fullPost.createdAt).startOf().fromNow()}</small>
            </div>
            <p> {props.fullPost.text} </p>

            <div className="media-body-inline-grid">
              <div>
                <img src={props.fullPost.pics}>
                </img>
              </div>
            </div>
            <div>
              <div className="pull-left">
                {props.fullPost.google_avatar
                  ? <img className="img-circle media-object" src={props.fullPost.google_avatar}/>
                : <img className="img-circle media-object" src={props.fullPost.avatar}/>}
              </div>
              <h5>
                {props.fullPost.google_name
                  ? props.fullPost.google_name
                  : props.fullPost.author}
              </h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default FullPost;
