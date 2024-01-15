import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Profile} from "./Profile";
import {ProfileType, setUserProfileAC} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";


type PropsType = {
    profile: ProfileType | null
    setUserProfileAC: (profile: ProfileType) => void
}
 class ProfileContainer extends React.Component<PropsType> {

     componentDidMount() {
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setUserProfileAC})(ProfileContainer)