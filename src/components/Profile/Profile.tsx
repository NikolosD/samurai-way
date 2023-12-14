import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {AppRootStateType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



type ProfileType = {
    store:  AppRootStateType
    dispatch: (action: any) => void
}
export const Profile = (props:ProfileType) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPostsContainer store={props.store} dispatch={props.dispatch}   />
        </div>
    );
};
