import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={style.dialog + ' ' + style.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name="Aleksandr" id="1" />
        <DialogItem name="Larisa" id="2" />
        <DialogItem name="Anna" id="3" />
        <DialogItem name="Ilya" id="4" />
        <DialogItem name="Marina" id="5" />
        <DialogItem name="Olya" id="6" />
        <DialogItem name="Maksim" id="7" />
      </div>
      <div className={style.messages}>
        <Message message="Hi!" />
        <Message message="How are you?" />
        <Message message="Cool <3" />
      </div>
    </div>
  );
};

export default Dialogs;
