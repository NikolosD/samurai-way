import React, {ChangeEvent, createRef, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionType, AppState} from "../../../redux/state";


type MyPostsPropsType = {
    state: AppState
    newPostText: string
    dispatch: (action: ActionType) => void
}
export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.state.profilePage.postData.map(p => <Post message={p.message}
                                                                          likesCount={p.likesCount}/>)


    const newPostElement = createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.dispatch({type: 'ADD-POST', postText: text})

        }
    }

    let onPostChange = ()=>{
        if(newPostElement.current){
        let text = newPostElement.current?.value
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text})
        }
    }

    return (
        <>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </>
    );
};
