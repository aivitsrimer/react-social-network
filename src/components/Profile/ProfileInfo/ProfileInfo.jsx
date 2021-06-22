import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={style.background} src="/bg.jpeg" alt="background" />
      </div>
      <div className={style.descriptionBlock}>avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
