import React, {ChangeEvent, createRef, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {AppState, PostData, updateNewPostText} from "../../../redux/state";


type MyPostsPropsType = {
    state: AppState
    addPost: (postData: string) => void
    newPostText: string
    updateNewPostText: (newText:string)=> void
}
export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.state.profilePage.postData.map(p => <Post message={p.message}
                                                                          likesCount={p.likesCount}/>)


    const newPostElement = createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost(text)

        }
    }

    let onPostChange = ()=>{
        if(newPostElement.current){
        let text = newPostElement.current?.value
        props.updateNewPostText(text)
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
