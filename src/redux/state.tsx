import {rerenderEntireTree} from "../render";

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
        newPostText:string
    };
}



let state: AppState = {
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
}

export const addPost = () => {
    const newPost: PostData = { id:state.profilePage.postData.length+1,message:state.profilePage.newPostText, likesCount:10}
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ' '
    rerenderEntireTree(state)
}


export const updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}


export default state;
