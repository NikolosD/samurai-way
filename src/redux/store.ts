
import {
    dialogsPageReducerType,
    dialogsReducer,
} from "./dialogs-reducer";
import {ProfilePageActionType, profileReducer, ProfileType} from "./profile-reducer";


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
        profile: ProfileType | null
        status: string
    };
}

export type StoreType = {
    _state: AppState
    subscribe:(callback:() =>void) => void
    getState: () => AppState
    dispatch: (action:ActionsType) => void
    _callSubscriber: () => void;
}

// export type ActionsType = AddPostActionType | UpdateNewTextActionType | UpdateNewMessageTextActionType | AddMessageActionType
export type ActionsType = ProfilePageActionType | dialogsPageReducerType


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
            profile: null,
            status: 'enter your status'
        },
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },

    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        // @ts-ignore
        this._state.profilePage = profileReducer(this._state.profilePage,action as ProfilePageActionType)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage,action as dialogsPageReducerType)
        this._callSubscriber()
    }
}




export default store;

