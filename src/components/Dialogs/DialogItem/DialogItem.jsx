import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={style.dialogs + ' ' + style.active}>
      <NavLink className={style.link} to={path}>
          <img src="/avatar.jpg" alt="avatar" />
          {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
