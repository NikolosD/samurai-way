import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserPageType, UserStateType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type PropsType = {
    followAC: (userId: number) => void
    unFollowAC: (userId: number) => void
    onPageChange: (page: number) => void
} & UserStateType
export const Users: React.FC<PropsType> = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>

            <div style={{display: 'flex', gap: '10px'}}>
                {pages.map(p => (
                    <span
                        className={props.currentPage === p ? s.selectedPage : ''}
                        onClick={() => props.onPageChange(p)}
                        style={{cursor: 'pointer'}}>
                            {p}
                        </span>
                ))}
            </div>

            {props.users.map(u => <div key={u.id}>
                <span>
       <NavLink to={'/profile/' + u.id}>
           <img
               className={s.userAvatar}
               src={u.photos.small || userPhoto}
               alt=""/>
       </NavLink>

                <div>
                    {u.followed ? <button onClick={() => props.unFollowAC(u.id)}>Unfollow</button> :
                        <button onClick={() => props.followAC(u.id)}>Follow</button>}
                </div>
                     </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.city'}</div>
                    <div>{'u.location.country'}</div>
                </span>
            </div>)}
        </div>
    );
}
