import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    let state = props.dialogsPage;

  let dialogElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = state.messagesData.map((message) => (
      <Message message={message.message} />));

  let newMessageElement = state.newMessageText;

  let onSendMessage = () => {
      props.sendMessage();
  };

  let onMessageChange = (event) => {
      // let text = newMessageElement.current.value;
      let newText = event.target.value;
      props.updateNewMessageText(newText);
  };

  console.log(state.newMessageText)

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogElements}</div>
      <div className={style.messagesWrapper}>
          <div className={style.message}>
              { messagesElements }
          </div>
          <div className={style.sendMessage}>
              <textarea onChange={ onMessageChange }
                        value={newMessageElement}
                        cols="20" rows="5"/>
              <button onClick={ onSendMessage }>Send</button>
          </div>
      </div>
    </div>
  );
};

export default Dialogs;
