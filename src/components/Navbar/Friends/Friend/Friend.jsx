import { NavLink } from 'react-router-dom';
import style from './../Friends.module.css';

const Friend = (props) => {

    return (
        <NavLink className={style.link} to='/dialogs/'>
            <img src="/avatar.jpg" alt="avatar" />
            {props.name}
        </NavLink>
    );
};

export default Friend;