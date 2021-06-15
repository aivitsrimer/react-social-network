import React from 'react';
import style from './Post.module.css';

const Post = () => {
  return (
    <div className={style.item}>
      <img src="photo.jpg" alt="avatar" />
      Post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
