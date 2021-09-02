import React from "react";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    //let state = props.store.getState();
    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator());
    // };
    //
    // let onPostChange = (text) => {
    //     props.store.dispatch(updateNewPostTextCreator(text));
    // };

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };
                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextCreator(text));
                    };

                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    postsData={state.profilePage.postsData}
                                    newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    );
};
export default MyPostsContainer;
