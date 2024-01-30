import {connect} from "react-redux";
import {
    followAC, followTC, getUserTC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleFollowingProgress, toggleIsFetching,
    unFollowAC, unfollowTC,
    UserPageType, UserStateType
} from "../../redux/users-reducer";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import React, {Component, ComponentType} from "react";
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
    totalUsersCount: number,
    setCurrentPageAC: (page: number) => void,
    toggleFollowingProgress: (followingInProgress: boolean, id: number) => void
    getUserTC: (currentPage: number, pageSize: number) => void
    followTC: (id: number) => void
    unfollowTC: (id: number) => void

} & UserStateType

class UsersContainer extends Component<PropsType> {


    componentDidMount() {
        this.props.getUserTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (p: number) => {
        this.props.getUserTC(p, this.props.pageSize)
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
                    followTC={this.props.followTC}
                    unfollowTC={this.props.unfollowTC}
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


export default compose<ComponentType>(connect(mapStateToProps, {
    followAC,
    unFollowAC,
    setCurrentPageAC,
    toggleFollowingProgress,
    getUserTC,
    followTC,
    unfollowTC,
}))(UsersContainer)