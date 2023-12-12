import {DialogData, MessageData, } from "./state";


export type dialogsPageReducerType = AddMessageActionType | UpdateNewMessageTextActionType

export type AddMessageActionType = ReturnType<typeof addMessageAC>

export type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>

type dialogsPageType = {
    dialogsData: DialogData[];
    messagesData: MessageData[];
    newMessageText: string
}
export const dialogsReducer = (state: dialogsPageType, action: dialogsPageReducerType) => {
    switch (action.type) {

        case'ADD-MESSAGE':
            const newMessage: MessageData = {
                id: state.messagesData.length + 1,
                message: state.newMessageText,
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ' '
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}

 export const addMessageAC = (newMessage: string)  =>{
    return {
        type: "ADD-MESSAGE",
        newMessage: newMessage
    }  as const
}

export const updateNewMessageTextAC = (newMessage: string ) =>{
    return{
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessage: newMessage
    }  as const
}