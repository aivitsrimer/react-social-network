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
  let dialogsData = [
    { id: 1, name: 'Aleksandr' },
    { id: 2, name: 'Larisa' },
    { id: 3, name: 'Anna' },
    { id: 4, name: 'Ilya' },
    { id: 5, name: 'Marina' },
    { id: 6, name: 'Olya' },
    { id: 7, name: 'Maksim' },
  ];

  let messagesData = [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Cool' },
    { id: 4, message: 'Love <3' },
  ];

  let dialogElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = messagesData.map((message) => <Message message={message.message} />);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogElements}</div>
      <div className={style.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
