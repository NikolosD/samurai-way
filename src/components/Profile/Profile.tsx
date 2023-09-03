import React from 'react';
import './Profile.module.css'
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/nrosjoo363yog5hsj1bs"
                    alt=""/>
            </div>
            <div>
                ava + desc
            </div>
            <div>My posts</div>
            <div className={s.item}>post 1</div>
            <div className={s.item}>post 2</div>
        </div>
    );
};
