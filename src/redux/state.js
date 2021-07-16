import {rerenderEntireTree} from "../render";

let state = {
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
        ]
    },
    navbar: {
        friends: [
            { id: 1, name: 'Vasya' },
            { id: 2, name: 'Larisa' },
            { id: 3, name: 'Anna' },
        ]
    }
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        countLikes: 0,
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;