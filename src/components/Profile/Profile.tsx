import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";
import {Login} from "../Login/Login";



type PropsType = {
    profile: ProfileType | null
    status: string
    setUserProfileStatusTC: (status: string) => void

}
export const Profile = (props:PropsType) => {

    return (
        <div >
            <ProfileInfo  profile={props.profile} status={props.status} setUserProfileStatusTC={props.setUserProfileStatusTC} />
            <MyPostsContainer/>
        </div>
    );
};
