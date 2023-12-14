import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";

import {AppRootStateType} from "../../redux/redux-store";
import {ActionsType} from "../../redux/store";
import {keyboard} from "@testing-library/user-event/dist/keyboard";



type DialogsType = {
    store: AppRootStateType
    dispatch: (action:ActionsType) => void
    addMessage: (newMessageText: string) => void
    onMessageChange: (e:ChangeEvent<HTMLTextAreaElement>) => void
}

export const Dialogs = (props: DialogsType) => {

    const onMessageChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        props.onMessageChange(e)
    }

    const addMessageHandler = () =>{
      props.addMessage(newMessageText)
    }

    let state = props.store.dialogs
    let newMessageText = state.newMessageText
    let dialogsElement = state.dialogsData.map(d => <DialogsItem id={d.id} name={d.name} key={d.id}/>  )
    let messageElement = state.messagesData.map(m =>  <Message message={m.message} key={m.id} />)

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

