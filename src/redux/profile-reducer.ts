import {PostData} from "./store";
import {ProfilePageType} from "../components/Profile/MyPosts/MyPostsContainer";

export type AddPostActionType = ReturnType<typeof addPostAC>

export type UpdateNewTextActionType = ReturnType<typeof updateNewPostTextAC>

export type ProfilePageActionType = AddPostActionType | UpdateNewTextActionType


const initialState: ProfilePageType = {
    postData: [
        {id: 1, message: 'Hello it"s my first post', likesCount: 15},
        {id: 2, message: 'Hello it"s my second post', likesCount: 5},
        {id: 3, message: 'Hello it"s my third post', likesCount: 25},
    ],
    newPostText: '',
}
export const profileReducer = (state: ProfilePageType = initialState, action: ProfilePageActionType) => {
    switch (action.type) {
        case 'ADD-POST': {

            const newPost: PostData = {
                id: state.postData.length + 1,
                message: state.newPostText,
                likesCount: 10
            }

            return{
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }


        }
        case 'UPDATE-NEW-POST-TEXT':

            return {
                ...state,
                newPostText: action.newText
            }

        default:
            return state
    }
}

export const addPostAC = (newText: string) => {
    return {
        type: "ADD-POST",
        newText: newText
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}