import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {AppRootStateType} from "../../redux/redux-store";



type ProfileType = {
    state:  AppRootStateType
    dispatch: (action: any) => void
}
export const Profile = (props:ProfileType) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts state={props.state} dispatch={props.dispatch}   />
        </div>
    );
};
