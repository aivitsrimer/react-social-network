const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', countLikes: '14' },
        { id: 2, message: 'It`s my first post', countLikes: '25' },
        { id: 3, message: 'Cool !!', countLikes: '5' },
    ],
    newPostText: 'it-program',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                countLikes: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator= (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;