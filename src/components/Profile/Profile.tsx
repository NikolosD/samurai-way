import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";



type PropsType = {
    profile: ProfileType | null
}
export const Profile = (props:PropsType) => {
    return (
        <div >
            <ProfileInfo  profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};
