import App from "../App";
import {access} from "fs";


export type DialogData = {
    id: number;
    name: string;
}

export type MessageData = {
    id: number;
    message: string;
}

export type PostData = {
    id: number;
    message: string;
    likesCount: number;
}

export interface AppState {
    messagesPage: {
        dialogsData: DialogData[];
        messagesData: MessageData[];
    };
    profilePage: {
        postData: PostData[];
        newPostText: string
    };
}

export type StoreType = {
    _state: AppState
    subscribe:(callback:(state: AppState)=>void) => void
    getState: () => AppState
    dispatch: (action: ActionType) => void
    _callSubscriber: (state: AppState) => void;
}

export type ActionType = AddPostActionType |  UpdateNewTextActionType

type AddPostActionType = {
    type: 'ADD-POST',
    postText: string
}

type UpdateNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

let store: StoreType = {
    _state: {
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Nick'},
            ],
            messagesData: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Ola!'},
                {id: 3, message: 'Coma esta?'},
            ],
        },
        profilePage: {
            postData: [
                {id: 1, message: 'Hello it"s my first post', likesCount: 15},
                {id: 2, message: 'Hello it"s my second post', likesCount: 5},
                {id: 3, message: 'Hello it"s my third post', likesCount: 25},
            ],
            newPostText: '',
        },
    },
    _callSubscriber(state: AppState) {
    },
    getState() {
        return this._state
    },

    subscribe(observer: (state: AppState) => void) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostData = {
                id: this._state.profilePage.postData.length + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 10
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ' '
            this._callSubscriber(this._state)
        }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}


export default store;

