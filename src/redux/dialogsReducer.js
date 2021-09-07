const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Aleksandr'},
        {id: 2, name: 'Larisa'},
        {id: 3, name: 'Anna'},
        {id: 4, name: 'Ilya'},
        {id: 5, name: 'Marina'},
        {id: 6, name: 'Olya'},
        {id: 7, name: 'Maksim'},
    ],
    messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Cool'},
        {id: 4, message: 'Love <3'},
    ],
    newMessageText: 'New message!',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = state.newMessageText;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: body}],
                newMessageText: '',
            };
            //stateCopy.messagesData.push(newMessage);
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;