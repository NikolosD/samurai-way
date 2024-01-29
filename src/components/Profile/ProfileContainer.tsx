import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Profile} from "./Profile";
import {getUserProfileTC, ProfileType, setUserProfileAC} from "../../redux/profile-reducer";
import {connect, MapDispatchToProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {UserApi} from "../../api/api";
import {Action, Dispatch} from "redux";


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
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

type MapDispatchToPropsType = {
    getUserProfileTC: (userId: string)=> void;
};


export default connect(mapStateToProps, {getUserProfileTC})(withRouter(ProfileContainer))