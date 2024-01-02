import {connect} from "react-redux";
import {Users} from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserPageType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    users: UserPageType[]
    pageSize: number,
    currentPage: number,
    totalUsersCount: number,
}

type mapDispatchToPropsType = {
    followAC: (userId: number) => void,
    unfollowAC: (userId: number) => void,
    setUsersAC: (users: UserPageType[]) => void,
    setTotalUsersCountAC: (totalUsersCount: number) => void,
    setCurrentPageAC: (currentPage: number) => void

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)