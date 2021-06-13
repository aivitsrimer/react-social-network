import React from 'react';
import style from './Profile.module.css';

function Profile() {
  return (
    <div className={style.content}>
      <div>
        <img src="/bg.jpeg" alt="background" />
      </div>
      <div>avatar + description</div>
      <div>
        My post
        <div>New post</div>
        <div className={style.posts}>
          <div className={style.item}>Post 1</div>
          <div className={style.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
