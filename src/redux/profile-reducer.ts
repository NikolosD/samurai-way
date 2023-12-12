import {PostData, } from "./state";

export type AddPostActionType = ReturnType<typeof addPostAC>

export type UpdateNewTextActionType = ReturnType<typeof updateNewPostTextAC>

export type ProfilePageActionType = AddPostActionType | UpdateNewTextActionType

type profilePageType = {
    postData: PostData[];
    newPostText: string
}


export const profileReducer = (state: profilePageType, action: ProfilePageActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostData = {
                id: state.postData.length + 1,
                message: state.newPostText,
                likesCount: 10
            }
            state.postData.push(newPost)
            state.newPostText = ' '
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = (postText: string)  =>{
    return {
        type: "ADD-POST",
        postText: postText
    }  as const
}

export const updateNewPostTextAC = (newText: string ) =>{
    return{
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    }  as const
}