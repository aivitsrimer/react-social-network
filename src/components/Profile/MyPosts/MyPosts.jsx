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
        <Post message="Hi, how are you?" countLikes="14" />
        <Post message="It`s my first post" countLikes="25" />
      </div>
    </div>
  );
};

export default MyPosts;
