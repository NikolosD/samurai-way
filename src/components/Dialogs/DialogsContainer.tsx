import React, {ChangeEvent} from 'react';
import {addMessageAC, DialogsPageType, updateNewMessageTextAC} from "../../redux/dialogs-reducer";

import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";



type DialogsContainerType = {
    state: DialogsPageType
}

type mapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
    onMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const mapStateToProps = (state: AppStateType): DialogsContainerType => {
    return {
        state: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: (newMessageText: string) => {
            dispatch(addMessageAC(newMessageText))
        },
        onMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewMessageTextAC(e.target.value))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)