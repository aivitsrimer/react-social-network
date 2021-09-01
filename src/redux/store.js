import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";

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

    dispatch(action) { // { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;