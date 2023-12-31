import React, {Component} from "react";


import {UserPageType} from "../../redux/users-reducer";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import axios from "axios";

type PropsType = {
    users: UserPageType[]
    followAC: (userId: number) => void
    unfollowAC: (userId: number) => void
    setUsersAC: (users: UserPageType[]) => void
}

export class Users extends Component<PropsType> {

        componentDidMount(){
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => {
                    this.props.setUsersAC(res.data.items)
                }).catch(error => {
                console.error('Error fetching users:', error);
            });
        }

    render() {
        return (
            <div>
                {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
<img className={s.userAvatar} src={u.photos.small || userPhoto} alt=""/>
                        </div>

                <div>
                    {u.followed ? <button onClick={() => this.props.unfollowAC(u.id)}>Unfollow</button> :
                        <button onClick={() => this.props.followAC(u.id)}>Follow</button>}
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
}