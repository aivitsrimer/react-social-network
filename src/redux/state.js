const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, how are you?', countLikes: '14' },
                { id: 2, message: 'It`s my first post', countLikes: '25' },
                { id: 2, message: 'Cool !!', countLikes: '5' },
            ],
            newPostText: 'it-program',
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Aleksandr' },
                { id: 2, name: 'Larisa' },
                { id: 3, name: 'Anna' },
                { id: 4, name: 'Ilya' },
                { id: 5, name: 'Marina' },
                { id: 6, name: 'Olya' },
                { id: 7, name: 'Maksim' },
            ],
            messagesData: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Cool' },
                { id: 4, message: 'Love <3' },
            ],
            newMessageText: 'New message!',
        },
        navbar: {
            friends: [
                { id: 1, name: 'Vasya' },
                { id: 2, name: 'Larisa' },
                { id: 3, name: 'Anna' },
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _addPost(){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            countLikes: 0,
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    _addMessage() {
        let newMessage = {
            id:  4,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    _updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state)
    },

    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        } else if (action.type === ADD_MESSAGE) {
            this._addMessage();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText(action.newText);
        }
    },
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator= (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addMessageCreator = () => ({ type: ADD_MESSAGE});
export const updateNewMessageTextCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default store;
window.store = store;