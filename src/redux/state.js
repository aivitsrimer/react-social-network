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
    addPost(){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            countLikes: 0,
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        debugger;
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id:  4,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
};

export default store;
window.store = store;