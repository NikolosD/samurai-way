import React from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../common/Preloader";
import defaultPic from "../../../../assets/images/user.png";
import ProfileStatus from "../../ProfileStatus";

type PropsType = {
    profile: ProfileType | null;
};


const ProfileInfo: React.FC<PropsType> = (props) => {
    return (
        <>
            {!props.profile ? (
                <Preloader/>
            ) : (
                <div>
                    <div className={s.info}>
                        <img src={props.profile.photos.large || defaultPic} alt={'User Avatar'}/>
                        <div>{props.profile.fullName}</div>
                        <ProfileStatus aboutMe={props.profile.aboutMe}/>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProfileInfo;
