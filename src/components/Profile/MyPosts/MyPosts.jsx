import style from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post message={post.message} countLikes={post.countLikes} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
      props.dispatch({ type: 'ADD-POST' });
  };

  let onPostChange = () => {
      let text = newPostElement.current.value;
      props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
  };

  return (
    <div className={style.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText} cols="18" rows="5" />
        </div>
        <button onClick={ addPost }>Add post</button>
        <button>Remove</button>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
