import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect, MapDispatchToProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {Action, compose, Dispatch} from "redux";
import {
    getUserProfileTC,
    ProfileType,
    getUserProfileStatusTC, setUserProfileStatusTC
} from "../../redux/profile-reducer";


type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        !userId && (userId = '30367')

        this.props.getUserProfileTC(userId)
        this.props.getUserProfileStatusTC(userId)
        this.props.setUserProfileStatusTC(this.props.status)
    }


    render() {
        return <Profile {...this.props} status={this.props.status} setUserProfileStatusTC={this.props.setUserProfileStatusTC} />
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

type MapDispatchToPropsType = {
    getUserProfileTC: (userId: string) => void;
    getUserProfileStatusTC: (userId: string)=> void
    setUserProfileStatusTC: (status: string) => void
};


export default compose<ComponentType>((connect(mapStateToProps, {getUserProfileTC,getUserProfileStatusTC,setUserProfileStatusTC})), withRouter,)(ProfileContainer)