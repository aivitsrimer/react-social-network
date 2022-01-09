import styles from './user.module.css';
import axios from "axios";

let Users = (props) => {
    let getUsers = () => {
        if (!props.users.length) {
    
            axios.get("https://social-network.samuraijs.com/api/1.0/users?term=test").then(response => {
                props.setUsers(response.data.items);
            });
            return <div>loading..</div>;
    }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map( user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user?.photos?.small ?? props.defaultPhoto} className={styles.userPhoto} alt="userPhoto"/>
                    </div>
                    <div>
                        { user.followed
                            ? <button onClick={ () => { props.unfollow(user.id) } } >Unfollow</button>
                            : <button onClick={ () => { props.follow(user.id) } }>Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;