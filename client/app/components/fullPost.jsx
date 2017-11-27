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
                <img src="https://wanderworld360.com/wp-content/uploads/2016/07/the-merlion-singapore-wallpaper.jpg">
                </img>
              </div>
              <br></br>
              <div>
                <img src="http://static.asiawebdirect.com/m/phuket/portals/www-singapore-com/homepage/nightlife/pagePropertiesImage/nightlife-singapore.jpg.jpg">
                </img>
              </div>
              <br></br>
              <div>
                <img src="http://www.livinginsingapore.org/wp-content/uploads/2016/05/24939069370_693bf7b49d_k.jpg">
                </img>
              </div>
              <br></br>
              <div>
                <img src="https://images.arcadis.com/media/F/7/3/%7BF736C47D-45DC-4365-96F4-4466E87E0BB7%7DP25-shutterstock_136985036%20(2000x1137).jpg">
                </img>
              </div>
            </div>

            <h5>by {props.fullPost.google_name 
              ? props.fullPost.google_name 
              : props.fullPost.author}
            </h5>
            <div>
              {props.fullPost.google_avatar 
                ? <img style={{maxHeight: '40px'}} src={props.fullPost.google_avatar}/> 
                : <img style={{maxHeight: '40px'}} src={props.fullPost.avatar}/>}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default FullPost;
