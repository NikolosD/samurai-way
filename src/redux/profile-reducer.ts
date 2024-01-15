import {PostData} from "./store";
import {ProfilePageType} from "../components/Profile/MyPosts/MyPostsContainer";

export type AddPostActionType = ReturnType<typeof addPostAC>

export type UpdateNewTextActionType = ReturnType<typeof updateNewPostTextAC>

export type setUserProfileACType = ReturnType<typeof setUserProfileAC>

export type ProfilePageActionType = AddPostActionType | UpdateNewTextActionType | setUserProfileACType


const initialState: ProfilePageType = {
    postData: [
        {id: 1, message: 'Hello it"s my first post', likesCount: 15},
        {id: 2, message: 'Hello it"s my second post', likesCount: 5},
        {id: 3, message: 'Hello it"s my third post', likesCount: 25},
    ],
    newPostText: '',
    profile: null,
}

export type ProfileType = {
    "aboutMe": null | string
    "contacts": {
        "facebook": null | string
        "website": null | string
        "vk": null | string
        "twitter": null | string
        "instagram": null | string
        "youtube": null | string
        "github": null | string
        "mainLink": null | string
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": null | string
    "fullName": string
    "userId": number
    "photos": {
        "small": null | string
        "large": null | string
    }
}



export const profileReducer = (state: ProfilePageType = initialState, action: ProfilePageActionType) => {
    switch (action.type) {
        case 'ADD-POST': {

            const newPost: PostData = {
                id: state.postData.length + 1,
                message: state.newPostText,
                likesCount: 10
            }

            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }


        }
        case 'UPDATE-NEW-POST-TEXT': {

            return {
                ...state,
                newPostText: action.newText
            }
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
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

export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}