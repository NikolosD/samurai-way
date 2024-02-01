import {PostData} from "./store";
import {Dispatch} from "redux";
import {ProfileAPI, UserAPI} from "../api/api";

export type AddPostActionType = ReturnType<typeof addPostAC>

export type UpdateNewTextActionType = ReturnType<typeof updateNewPostTextAC>

export type setUserProfileACType = ReturnType<typeof setUserProfileAC>
export type getStatusACType = ReturnType<typeof setUserStatusAC>

export type ProfilePageActionType = AddPostActionType | UpdateNewTextActionType | setUserProfileACType | getStatusACType


export type ProfilePageType = {
    postData: PostData[];
    newPostText: string;
    profile: ProfileType | null;
    status: string,
}

const initialState: ProfilePageType = {
    postData: [
        {id: 1, message: 'Hello it"s my first post', likesCount: 15},
        {id: 2, message: 'Hello it"s my second post', likesCount: 5},
        {id: 3, message: 'Hello it"s my third post', likesCount: 25},
    ],
    newPostText: '',
    profile: null,
    status: 'enter your status'

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


export const profileReducer = (state: ProfilePageType = initialState, action: ProfilePageActionType): ProfilePageType => {
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

        case 'SET-USER-STATUS': {
            return {
                ...state,
                status: action.status
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
        type: "SET-USER-PROFILE" as const,
        profile
    }
}

export const setUserStatusAC = (status: string) => {
    return {
        type: 'SET-USER-STATUS' as const, status
    }
}

export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    ProfileAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfileAC(res.data))
        })
}

export const getUserProfileStatusTC = (userId: string) => (dispatch: Dispatch) => {
    ProfileAPI.getStatus(userId)
        .then(res => {
                dispatch(setUserStatusAC(res.data))
        })
}
export const setUserProfileStatusTC = (status: string) => (dispatch: Dispatch) => {
    ProfileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatusAC(status))
            }
        })
}