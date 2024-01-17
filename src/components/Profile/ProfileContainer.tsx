import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Profile} from "./Profile";
import {ProfileType, setUserProfileAC} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType
 class ProfileContainer extends React.Component<PropsType> {

     componentDidMount() {

         let userId = this.props.match.params.userId
         !userId && (userId = '2')

         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
             .then(res => {
                 this.props.setUserProfileAC(res.data)
             })
     }
    render() {
        return <Profile {...this.props}   />
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType=> {
    return {
        profile: state.profilePage.profile
    }
}

type MapDispatchToPropsType = {
    setUserProfileAC: (profile: ProfileType) => void
}



export default connect(mapStateToProps, {setUserProfileAC})(withRouter(ProfileContainer))