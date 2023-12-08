import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {AppState} from "../../redux/state";



type DialogsType ={
  state:AppState
}

export const Dialogs = (props:DialogsType) => {


        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {props.state.messagesPage.dialogsData.map(d=> <DialogsItem id={d.id} name={d.name}/>)}
                </div>
                <div className={s.messages}>
                    {props.state.messagesPage.messagesData.map(m=><Message message={m.message}/>)}
                </div>
            </div>
        );
    }
;

