import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
            let state = store.getState().dialogsPage;

            let onSendMessage = () => {
            store.dispatch(sendMessageCreator());
        };

            let onMessageChange = (body) => {
            store.dispatch(updateNewMessageTextCreator(body));
        };
            return (<Dialogs updateNewMessageText={onMessageChange}
            sendMessage={onSendMessage}
            dialogsPage={state}/>)
            }
        }
        </StoreContext.Consumer>)


};

export default DialogsContainer;
