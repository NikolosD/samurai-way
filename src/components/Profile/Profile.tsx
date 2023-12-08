import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {AppState} from "../../redux/state";


type ProfileType = {
    state:  AppState
    addPost: (postData:string)=> void
    newPostText: string
    updateNewPostText:(newText: string)=> void
}
export const Profile = (props:ProfileType) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts state={props.state} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText} />
        </div>
    );
};
