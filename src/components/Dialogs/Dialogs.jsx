import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.state.messagesData.map((message) => (
      <Message message={message.message} />));

  let newMessageElement = React.createRef();

  let addMessage = () => {
      let text = newMessageElement.current.value;
      alert(text);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogElements}</div>
      <div className={style.messagesWrapper}>
          <div className={style.message}>
              { props.state.messagesData.map((message) => (
                  <Message message={message.message} />
              ))}
          </div>
          <div className={style.sendMessage}>
              <textarea ref={newMessageElement} cols="20" rows="5">Новое сообщение</textarea>
              <button onClick={ addMessage }>Send</button>
          </div>
      </div>
    </div>
  );
};

export default Dialogs;
