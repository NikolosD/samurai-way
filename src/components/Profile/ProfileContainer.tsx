import React, {ComponentType} from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Profile} from "./Profile";
import {getUserProfileTC, ProfileType, setUserProfileAC} from "../../redux/profile-reducer";
import {connect, MapDispatchToProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {UserApi} from "../../api/api";
import {Action, compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        !userId && (userId = '2')

        this.props.getUserProfileTC(userId)

    }


    render() {
        return <Profile {...this.props}   />
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

type MapDispatchToPropsType = {
    getUserProfileTC: (userId: string) => void;
};


export default compose<ComponentType>((connect(mapStateToProps, {getUserProfileTC})),withRouter,)(ProfileContainer)