import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";


type MyPostsPropsType={
    postData:  Array<{id:number ,message:string, likesCount:number}>
}
export const MyPosts = (props:MyPostsPropsType) => {


    return (
        <>
            <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
            <textarea ></textarea>
            <button>Add post</button>
            </div>
                <div className={s.posts}>
                    {props.postData.map(p=> <Post message={p.message} likesCount={p.likesCount}/>)}
                </div>
            </div>
        </>
    );
};
