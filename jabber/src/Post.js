import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css';

function Post() {
  return (
    <div className="Post">
      <div className="post_avatar">
        <Avatar src=""></Avatar>
      </div>
      <div className="post_body"></div>
      <div className="post_header"></div>
    </div>
  );
}

export default Post;
