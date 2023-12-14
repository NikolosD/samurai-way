import React, {ChangeEvent} from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {ActionsType} from "../../redux/store";
import {Dialogs} from "./Dialogs";



type DialogsContainerType = {
    store: AppRootStateType
    dispatch: (action:ActionsType) => void
}

export const DialogsContainer = (props: DialogsContainerType) => {



    const onMessageChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }

    const addMessageHandler = () =>{
        props.dispatch(addMessageAC(newMessageText))

    }

    let state = props.store.dialogs
    let newMessageText = state.newMessageText


        return (
        <Dialogs store={props.store} dispatch={props.dispatch} addMessage={addMessageHandler} onMessageChange={onMessageChangeHandler}/>
        );
    }
;

