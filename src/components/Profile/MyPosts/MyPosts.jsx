import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    { id: 1, message: 'Hi, how are you?', countLikes: '14' },
    { id: 2, message: 'It`s my first post', countLikes: '25' },
  ];

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
        <Post message={postsData[0].message} countLikes={postsData[0].countLikes} />
        <Post message={postsData[1].message} countLikes={postsData[1].countLikes} />
      </div>
    </div>
  );
};

export default MyPosts;
