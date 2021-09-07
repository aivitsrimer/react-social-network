import styles from './user.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
                followed: true, fullName: 'Anna', status: 'Frontend-developer', location: {city: 'Tomsk', country: 'Russia'} },
            { id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
                followed: false, fullName: 'Sasha', status: 'Backend-developer', location: {city: 'Kaliningrad', country: 'Russia'} },
            { id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
                followed: false, fullName: 'Ilya', status: 'I am a designer', location: {city: 'Kiev', country: 'Ukraine'} },
            { id: 4, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
                followed: false, fullName: 'Diana', status: 'I love a cats', location: {city: 'Moscow', country: 'Russia'} },
        ]);
    }

    return <div>
        {
            props.users.map( user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={styles.userPhoto} alt="photo"/>
                    </div>
                    <div>
                        { user.followed
                            ? <button onClick={ () => { props.unfollow(user.id) } } >Unfollow</button>
                            : <button onClick={ () => { props.follow(user.id) } }>Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;