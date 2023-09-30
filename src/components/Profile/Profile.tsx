import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

type ProfileType = {
    postData:  Array<{id:number ,message:string, likesCount:number}>
}
export const Profile = (props:ProfileType) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts postData={props.postData} />
        </div>
    );
};
