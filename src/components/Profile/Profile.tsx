import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



type ProfileType = {

}
export const Profile = (props:ProfileType) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
};
