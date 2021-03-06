import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogElements = state.dialogsData.map((dialog) => (
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
    ));
    let messagesElements = state.messagesData.map((message) => (
        <Message message={message.message}  key={message.id}/>));

    let newMessageElement = state.newMessageText;

    let onSendMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = (event) => {
        let newText = event.target.value;
        props.updateNewMessageText(newText);
    };

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
