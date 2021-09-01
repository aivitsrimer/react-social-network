import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextCreator(body));
    };

    console.log(state.newMessageText)

    return (<Dialogs updateNewMessageText={onMessageChange} sendMessage={onSendMessage} dialogsPage={state}/>);


};

export default DialogsContainer;
