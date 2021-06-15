import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        <textarea name="post" id="" cols="18" rows="5">
          Что у вас нового?
        </textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={style.posts}>
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
