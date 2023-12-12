import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionType, AppState} from "../../redux/state";


type ProfileType = {
    state:  AppState
    dispatch: (action: ActionType) => void
}
export const Profile = (props:ProfileType) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts state={props.state} dispatch={props.dispatch}   />
        </div>
    );
};
