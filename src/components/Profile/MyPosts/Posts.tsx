import React, {createRef,} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostData} from "../../../redux/store";
import {ProfilePageType} from "../../../redux/profile-reducer";



export type PostsPropsType = {
    state: ProfilePageType
    addPost: (text: string) => void
    onPostChange: (text: string) => void
}
export const Posts = (props: PostsPropsType) => {

    const postsElements = props.state.postData.map((p:PostData) => <Post message={p.message}
                                                                      likesCount={p.likesCount}/>)


    const newPostElement = createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost(text)
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current?.value
            props.onPostChange(text)
        }
    }

    return (
        <>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea ref={newPostElement} value={props.state.newPostText} onChange={onPostChange}/>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </>
    );
};
