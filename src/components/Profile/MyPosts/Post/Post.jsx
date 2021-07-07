import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src="/photo.jpg" alt="avatar" />
      {props.message}
      <div>
        <span>like {props.countLikes} </span>
      </div>
    </div>
  );
};

export default Post;
