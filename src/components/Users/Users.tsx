import React from 'react';
import {UserPageType} from "../../redux/users-reducer";
import s from './Users.module.css'

type PropsType = {
    users: UserPageType[]
    followAC: (userId: number) => void
    unfollowAC: (userId: number) => void
    setUsersAC: (users: UserPageType[]) => void
}


export const Users = (props: PropsType) => {
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
<img className={s.userAvatar} src={u.photoUrl} alt=""/>
                        </div>

                <div>
                    {u.followed ? <button onClick={() => props.unfollowAC(u.id)}>Unfollow</button> :
                    <button onClick={() => props.followAC(u.id)}>Follow</button>}
                </div>
                     </span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
            </div>)}
        </div>
    );
};



