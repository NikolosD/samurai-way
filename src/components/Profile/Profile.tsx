import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div >
            <div>
                <img className={s.imgClassName}
                    src="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/nrosjoo363yog5hsj1bs"
                    alt=""/>
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts/>
        </div>
    );
};
