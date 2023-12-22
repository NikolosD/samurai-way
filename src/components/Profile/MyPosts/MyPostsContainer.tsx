
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
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
    newPostText: string
}

type MapDispatchToPropsType = {
    addPost: (text:string) =>  void
    onPostChange: (text: string) =>  void
}

export type MyPostsPropsType = {
store: AppStateType
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        state: state.profile
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
