import App from "../App";
import {access} from "fs";
import {AddMessageActionType, dialogsReducer} from "./dialogs-reducer";
import {AddPostActionType, profileReducer} from "./profile-reducer";


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
        newMessageText: string
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
    dispatch: (action:any) => void
    _callSubscriber: (state: AppState) => void;
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
            newMessageText: '',
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
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage,action)
        this._callSubscriber(this._state)
    }
}




export default store;

