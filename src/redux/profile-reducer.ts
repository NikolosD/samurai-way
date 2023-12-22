import {PostData} from "./store";

export type AddPostActionType = ReturnType<typeof addPostAC>

export type UpdateNewTextActionType = ReturnType<typeof updateNewPostTextAC>

export type ProfilePageActionType = AddPostActionType | UpdateNewTextActionType

export type profilePageType = {
    postData: PostData[];
    newPostText: string
}

const initialState: profilePageType = {
    postData: [
        {id: 1, message: 'Hello it"s my first post', likesCount: 15},
        {id: 2, message: 'Hello it"s my second post', likesCount: 5},
        {id: 3, message: 'Hello it"s my third post', likesCount: 25},
    ],
    newPostText: '',
}
export const profileReducer = (state: profilePageType = initialState, action: ProfilePageActionType) => {
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