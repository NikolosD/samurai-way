import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <>
            <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
            <textarea ></textarea>
            <button>Add post</button>
            </div>
                <div className={s.posts}>
            <Post message={'hello'} likesCount={15}/>
                </div>
            </div>
        </>
    );
};
