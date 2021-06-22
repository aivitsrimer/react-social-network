import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={style.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea name="post" id="" cols="18" rows="5">
            Что у вас нового?
          </textarea>
        </div>
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
