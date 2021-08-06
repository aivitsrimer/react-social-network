import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogElements = props.dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.dialogsPage.messagesData.map((message) => (
      <Message message={message.message} />));

  let newMessageElement = React.createRef();

  let addMessage = () => {
      props.addMessage();
  };

  let onMessageChange = () => {
      let text = newMessageElement.current.value;
      props.updateNewMessageText(text);
  };

  console.log(props.dialogsPage.newMessageText)

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogElements}</div>
      <div className={style.messagesWrapper}>
          <div className={style.message}>
              { messagesElements }
          </div>
          <div className={style.sendMessage}>
              <textarea onChange={ onMessageChange }
                        ref={newMessageElement}
                        value={props.dialogsPage.newMessageText}
                        cols="20" rows="5"/>
              <button onClick={ addMessage }>Send</button>
          </div>
      </div>
    </div>
  );
};

export default Dialogs;
