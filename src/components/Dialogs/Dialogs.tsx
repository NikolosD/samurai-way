import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/state";



type DialogsType = {
    store: StoreType

}

export const Dialogs = (props: DialogsType) => {


    const onMessageChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        props.store.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }

    const addMessageHandler = () =>{
        props.store.dispatch(addMessageAC(newMessageText))

    }

    let state = props.store.getState().messagesPage
    let newMessageText = state.newMessageText
    let dialogsElement = state.dialogsData.map(d => <DialogsItem id={d.id} name={d.name}/>)
    let messageElement = state.messagesData.map(m => <Message message={m.message}/>)

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElement}
                </div>
                <div className={s.messages}>
                    {messageElement}
                    <div>
                        <div><textarea onChange={onMessageChangeHandler} value={newMessageText}/></div>
                        <div>
                            <button onClick={addMessageHandler}>Add Message</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

;

