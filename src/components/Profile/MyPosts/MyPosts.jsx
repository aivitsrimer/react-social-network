import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.postsData.map((post) => (
    <Post message={post.message} countLikes={post.countLikes} />
  ));

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
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
