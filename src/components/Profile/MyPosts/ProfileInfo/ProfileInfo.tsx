import React from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../common/Preloader";

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
                    <img
                        className={s.imgClassName}
                        src="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/nrosjoo363yog5hsj1bs"
                        alt=""
                    />
                    <div className={s.info}>
                        <img src={props.profile.photos.large || ''} alt={'User Avatar'}/>
                        <div>{props.profile.fullName}</div>
                        <div>{props.profile.aboutMe}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProfileInfo;
