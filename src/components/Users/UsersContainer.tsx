import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleFollowingProgress, toggleIsFetching,
    unFollowAC,
    UserPageType, UserStateType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import React, {Component} from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {UserApi} from "../../api/api";


type MapStateToPropsType = {
    users: UserPageType[]
    pageSize: number,
    currentPage: number,
    totalUsersCount: number,
    isFetching: boolean,
    isToggling: boolean,
    followingInProgress: number[],
}


type PropsType = {
    users: UserPageType[]
    followAC: (userId: number) => void
    unFollowAC: (userId: number) => void
    setUsersAC: (users: UserPageType[]) => void
    totalUsersCount: number,
    setTotalUsersCountAC: (totalUsersCount: number) => void
    setCurrentPageAC: (page: number) => void,
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (followingInProgress: boolean, id: number) => void
} & UserStateType

class UsersContainer extends Component<PropsType> {


    componentDidMount() {
        this.props.toggleIsFetching(true)
            UserApi.getUser(this.props.currentPage,this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsersAC(data.items)
                this.props.setTotalUsersCountAC(data.totalCount >= 100 ? 100 : data.totalCount)
            })
    }

    onPageChange = (p: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPageAC(p)
            UserApi.getUser(p,this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsersAC(data.items)
            });
    }

    render() {
        return (
            this.props.isFetching ? <Preloader/> :
                <Users
                    followAC={this.props.followAC}
                    unFollowAC={this.props.unFollowAC}
                    onPageChange={this.onPageChange}
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    isFetching={this.props.isFetching}
                    isToggling={this.props.isToggling}
                    followingInProgress={this.props.followingInProgress}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
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
        isFetching: state.usersPage.isFetching,
        isToggling: state.usersPage.isToggling,
        followingInProgress: state.usersPage.followingInProgress
    }
}



export default connect(mapStateToProps,{
    followAC,
    unFollowAC,
    setUsersAC,
    setTotalUsersCountAC,
    setCurrentPageAC,
    toggleIsFetching,
    toggleFollowingProgress,
})(UsersContainer)