import React, {Component} from "react";


import {setCurrentPageAC, setTotalUsersCountAC, UserPageType, UserStateType} from "../../redux/users-reducer";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import axios from "axios";

type PropsType = {
    users: UserPageType[]
    followAC: (userId: number) => void
    unfollowAC: (userId: number) => void
    setUsersAC: (users: UserPageType[]) => void
    totalUsersCount: number,
    setTotalUsersCountAC: (totalUsersCount: number) => void
    setCurrentPageAC: (page: number)=> void
} & UserStateType

export class Users extends Component<PropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsersAC(res.data.items)
                this.props.setTotalUsersCountAC(res.data.totalCount >= 100 ? 100 : res.data.totalCount)
            })
    }

    onPageChange = (p: number) =>
    {
        this.props.setCurrentPageAC(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsersAC(res.data.items)
            }).catch(error => {
            console.error('Error fetching users:', error);
        });
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
            debugger
        }


        return (
            <div>

                <div style={{display: 'flex', gap: '10px'}}>
                    {pages.map(p => (

                        <span
                            className={this.props.currentPage === p ? s.selectedPage : ''}
                            onClick={() => this.onPageChange(p)}
                            style={{cursor: 'pointer'}}>
                            {p}
                        </span>
                    ))}
                </div>
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