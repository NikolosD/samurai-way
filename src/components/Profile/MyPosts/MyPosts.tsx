import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <>
            <div>My posts</div>
            <div>
            <textarea ></textarea>
            <button>Add post</button>
            </div>
            <Post message={'hello'} likesCount={15}/>
        </>
    );
};
