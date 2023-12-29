import React, {useState} from 'react';
import {UserPageType} from "../../redux/users-reducer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

type PropsType = {
    users: UserPageType[]
    followAC: (userId: number) => void
    unfollowAC: (userId: number) => void
    setUsersAC: (users: UserPageType[]) => void
}


export const Users = (props: PropsType) => {
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    let getUsers = () => {
        if (!props.users.length) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => {
                    props.setUsersAC(res.data.items)
                    setIsButtonVisible(false)
                }).catch(error => {
                console.error('Error fetching users:', error);
            });
        }
    }
    return (
        <div>
            {isButtonVisible && <button onClick={getUsers}>Get Users</button>}
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
<img className={s.userAvatar} src={u.photos.small || userPhoto} alt=""/>
                        </div>

                <div>
                    {u.followed ? <button onClick={() => props.unfollowAC(u.id)}>Unfollow</button> :
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
};



