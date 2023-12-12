import React, {ChangeEvent, createRef, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionType, addPostAC, AppState, updateNewPostTextAC} from "../../../redux/state";


type MyPostsPropsType = {
    state: AppState
    dispatch: (action: ActionType) => void
}
export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.state.profilePage.postData.map(p => <Post message={p.message}
                                                                          likesCount={p.likesCount}/>)


    const newPostElement = createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.dispatch(addPostAC(text))
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current?.value
            props.dispatch(updateNewPostTextAC(text))
        }
    }

    return (
        <>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea ref={newPostElement} value={props.state.profilePage.newPostText} onChange={onPostChange}/>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </>
    );
};
