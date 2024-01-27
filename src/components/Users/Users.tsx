import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import{ UserStateType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

import {UserApi} from "../../api/api";


type PropsType = {
    followAC: (userId: number) => void
    unFollowAC: (userId: number) => void
    onPageChange: (page: number) => void
    toggleFollowingProgress: (followingInProgress: boolean, id: number) => void
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

            {props.users.map(u =>{
                return(
                <div key={u.id}>
                <span>
       <NavLink to={'/profile/' + u.id}>
           <img
               className={s.userAvatar}
               src={u.photos.small || userPhoto}
               alt=""/>
       </NavLink>

                <div>
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true,u.id)
                            UserApi.unFollowUser(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.unFollowAC(u.id)
                                    }
                                    props.toggleFollowingProgress(false,u.id)
                                }).catch(error => {
                                console.error('Error fetching users:', error);
                            });
                        }}>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true,u.id)
                            UserApi.followUser(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.followAC(u.id)
                                    }
                                    props.toggleFollowingProgress(false,u.id)
                                }).catch(error => {
                                console.error('Error fetching users:', error);
                            });

                        }}>
                            Follow
                        </button>}
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
            </div>)})}
        </div>
    );
}
