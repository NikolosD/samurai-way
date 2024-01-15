
import {addPostAC, ProfileType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Posts} from "./Posts";
import {Dispatch} from "redux";
import {PostData} from "../../../redux/store";


type MapStateToPropsType = {
    state: ProfilePageType
}

export type ProfilePageType = {
    postData: PostData[];
    newPostText: string;
    profile: ProfileType | null;
}

type MapDispatchToPropsType = {
    addPost: (text:string) =>  void
    onPostChange: (text: string) =>  void
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        state: state.profilePage
    }

}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        addPost: (text: string) => {
            dispatch(addPostAC(text))
        },
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
