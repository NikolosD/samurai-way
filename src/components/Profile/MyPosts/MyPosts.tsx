import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postData = [
        {id:1 ,message:'Hello it"s my first post', likesCount:15},
        {id:2 ,message:'Hello it"s my second post', likesCount:5},
    ]

    return (
        <>
            <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
            <textarea ></textarea>
            <button>Add post</button>
            </div>
                <div className={s.posts}>
                    {postData.map(p=> <Post message={p.message} likesCount={p.likesCount}/>)}
                </div>
            </div>
        </>
    );
};
