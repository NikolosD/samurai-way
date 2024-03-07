import React, {ChangeEvent} from 'react';
import {addMessageAC, DialogsPageType,} from "../../redux/dialogs-reducer";

import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



type DialogsContainerType = {
    state: DialogsPageType
    isAuth: boolean
}

type mapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
}

const mapStateToProps = (state: AppStateType): DialogsContainerType => {
    return {
        state: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: (newMessageText: string) => {
            dispatch(addMessageAC(newMessageText))
        }
    }
}

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))