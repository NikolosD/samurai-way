import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <>
            <div>
                <img className={s.imgClassName}
                     src="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/nrosjoo363yog5hsj1bs"
                     alt=""/>
            </div>
            <div className={s.info}>
                ava + desc
            </div>
        </>
    );
};

export default ProfileInfo;
