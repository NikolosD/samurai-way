import App from "../App";


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

let store = {
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

    getState(){
        return this._state
    },

    addPost() {
        const newPost: PostData = {
            id: this._state.profilePage.postData.length + 1,
            message: this._state.profilePage.newPostText,
            likesCount: 10
        }
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText = ' '
        this._callSubscriber(this._state)
    },


    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer: (state: AppState) => void) {
        this._callSubscriber = observer
    },
    _callSubscriber(state: AppState) {

    }
}


export default store;

