import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="Post" ref={ref}>
        <div className="post_avatar">
          <Avatar src={avatar}></Avatar>
        </div>
        <div className="post__body"></div>
        <div className="post__header"></div>
        <div className="post__headerText">
          <h3>
            {displayName}{' '}
            <span className="post__headerSpecial">
              {verified && <VerifiedUserIcon className="post__badge" />} @
              {username}
            </span>
          </h3>
        </div>
        <div className="post__headerDescription">
          <p> I challenge you to build a Twitter Clone with React.</p>
        </div>
      </div>
    );
  },
);

export default Post;
