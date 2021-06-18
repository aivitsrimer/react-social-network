import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img className={style.background} src="/bg.jpeg" alt="background" />
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
