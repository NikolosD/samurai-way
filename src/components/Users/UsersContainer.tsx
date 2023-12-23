import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unFollowAC, UserPageType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType={
    users: UserPageType[]
}

type mapDispatchToPropsType ={
    followAC: (userId: number) => void,
    unfollowAC: (userId: number) => void,
    setUsersAC: (users: UserPageType[]) => void,
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType =>{
    return {
        followAC: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollowAC: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsersAC: (users: UserPageType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)