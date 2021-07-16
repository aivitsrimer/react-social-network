import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css';
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.profilePage.postsData}
               newPostText={props.profilePage.newPostText}
               addPost={props.addPost}
               updateNewPostText={updateNewPostText}/>
    </div>
  );
};

export default Profile;
