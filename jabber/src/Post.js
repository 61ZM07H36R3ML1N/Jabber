import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function Post() {
  return (
    <div className="Post">
      <div className="post_avatar">
        <Avatar src=""></Avatar>
      </div>
      <div className="post__body"></div>
      <div className="post__header"></div>
      <div className="post__headerText">
        <h3>
          Brian Jamiel{' '}
          <span>
            <VerifiedUserIcon className="post__badge" />
          </span>
        </h3>
      </div>
      <div className="post__headerDescription"></div>
    </div>
  );
}

export default Post;
