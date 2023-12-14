import React from 'react';
import { addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {AppRootStateType} from "../../../redux/redux-store";
import {ActionsType} from "../../../redux/store";
import {MyPosts} from "./MyPosts";


type MyPostsContainerPropsType = {
    store: AppRootStateType
    dispatch: (action: ActionsType) => void
}
export const MyPostsContainer = (props: MyPostsContainerPropsType) => {


    const addPostHandler = (text:string) => {
            props.dispatch(addPostAC(text))
    }

    let onPostChangeHandler = (text:string) => {
            props.dispatch(updateNewPostTextAC(text))
    }

    return (
        <>
       <MyPosts state={props.store} dispatch={props.dispatch} addPost={addPostHandler} onPostChange={onPostChangeHandler} />
        </>
    );
};
