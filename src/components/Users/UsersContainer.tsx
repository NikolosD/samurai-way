import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserPageType, UserStateType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import React, {Component} from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";


type MapStateToPropsType = {
    users: UserPageType[]
    pageSize: number,
    currentPage: number,
    totalUsersCount: number,
    isFetching: boolean,
}

type mapDispatchToPropsType = {
    followAC: (userId: number) => void,
    unfollowAC: (userId: number) => void,
    setUsersAC: (users: UserPageType[]) => void,
    setTotalUsersCountAC: (totalUsersCount: number) => void,
    setCurrentPageAC: (currentPage: number) => void
    setIsFetchingAC: (isFetching: boolean) => void
}


type PropsType = {
    users: UserPageType[]
    followAC: (userId: number) => void
    unfollowAC: (userId: number) => void
    setUsersAC: (users: UserPageType[]) => void
    totalUsersCount: number,
    setTotalUsersCountAC: (totalUsersCount: number) => void
    setCurrentPageAC: (page: number) => void,
    setIsFetchingAC: (isFetching: boolean) => void,
} & UserStateType
 class UsersContainer extends Component<PropsType> {


    componentDidMount() {
        this.props.setIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setIsFetchingAC(false)
                this.props.setUsersAC(res.data.items)
                this.props.setTotalUsersCountAC(res.data.totalCount >= 100 ? 100 : res.data.totalCount)
            })
    }

    onPageChange = (p: number) => {
        this.props.setIsFetchingAC(true)
        this.props.setCurrentPageAC(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setIsFetchingAC(false)
                this.props.setUsersAC(res.data.items)
            }).catch(error => {
            console.error('Error fetching users:', error);
        });
    }

    render() {
        return (
            this.props.isFetching ? <Preloader/> :
            <Users
                followAC={this.props.followAC}
                unfollowAC={this.props.unfollowAC}
                onPageChange={this.onPageChange}
                users={this.props.users}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                isFetching={this.props.isFetching}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        followAC: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollowAC: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsersAC: (users: UserPageType[]) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCountAC: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setCurrentPageAC: (currentPage: number) => {
            dispatch(setCurrentPageAC((currentPage)))
        },

        setIsFetchingAC: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)