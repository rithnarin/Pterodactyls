import React from 'react';
import PostPreview from './postPreview.jsx';

const PostPreviewList = (props) => (
  <div className="container p-t-md">
    <div className="row">
      <div className="col-md-12">
        <ul className="list-group media-list media-list-stream">
          {props.posts.map((item, index) => {
            return <PostPreview
              key={index}
              post={item}
              changeView={props.changeView}
              setFullPost={props.setFullPost} />;
          })}
        </ul>
      </div>
    </div>
  </div>
);

export default PostPreviewList;
