import {DialogData, MessageData} from "./store";


export type dialogsPageReducerType = AddMessageActionType | UpdateNewMessageTextActionType

export type AddMessageActionType = ReturnType<typeof addMessageAC>

export type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>

export type DialogsPageType = {
    dialogsData: DialogData[];
    messagesData: MessageData[];
    newMessageText: string
}

const initialState : DialogsPageType = {
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
}
export const dialogsReducer = (state: DialogsPageType = initialState, action: dialogsPageReducerType) => {
    switch (action.type) {

        case'ADD-MESSAGE':
            const newMessage: MessageData = {
                id: state.messagesData.length + 1,
                message: state.newMessageText,
            }

            return {
                ...state,
                messagesData: [...state.messagesData,newMessage],
                newMessageText: ''
            }


        case 'UPDATE-NEW-MESSAGE-TEXT':
            return{
                ...state,
                newMessageText: action.newMessage
            }


        default:
            return state
    }
}

export const addMessageAC = (newMessage: string) => {
    return {
        type: "ADD-MESSAGE",
        newMessage: newMessage
    } as const
}

export const updateNewMessageTextAC = (newMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessage: newMessage
    } as const
}