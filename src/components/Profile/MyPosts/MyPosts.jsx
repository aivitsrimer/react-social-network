import style from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post message={post.message} countLikes={post.countLikes} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
      let text = newPostElement.current.value;
      props.addPost(text);
      newPostElement.current.value = '';
  };

  return (
    <div className={style.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref={newPostElement} cols="18" rows="5">
            Что у вас нового?
          </textarea>
        </div>
        <button onClick={ addPost }>Add post</button>
        <button>Remove</button>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
