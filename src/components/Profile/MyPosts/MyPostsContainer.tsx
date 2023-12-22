import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../redux/StoreContext";


type MyPostsContainerPropsType = {}
export const MyPostsContainer = (props: MyPostsContainerPropsType) => {


    return (
        <StoreContext.Consumer>
            {store => {
                const addPostHandler = (text: string) => {
                    store.dispatch(addPostAC(text))
                }

                let onPostChangeHandler = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }

                return (
                    <>
                        <MyPosts posts={store.getState().profilePage.postData}
                                 newPostText={store.getState().profilePage.newPostText}
                                 addPost={addPostHandler} onPostChange={onPostChangeHandler}/>
                    </>
                );
            }}
        </StoreContext.Consumer>
    )


};
