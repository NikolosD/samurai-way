import React from 'react';
import s from './Post.module.css'



type PostPropsType = {
    message: string,
    likesCount: number
}
export const Post = (props:PostPropsType) => {
    return (
        <>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className={s.img} alt=""/>
            <span className={s.item}>{props.message}</span>
            <div>
            <span>like : {props.likesCount}</span>
            </div>
        </>
    );
};
