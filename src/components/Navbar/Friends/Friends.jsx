import style from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let friendElements = props.friends.map((friend) => <Friend name={friend.name} />);

    return (
        <div className={style.friendsBlock}>
            <h2>Friends</h2>
            <div className={style.friends}>{friendElements}</div>
        </div>
    );
};

export default Friends;