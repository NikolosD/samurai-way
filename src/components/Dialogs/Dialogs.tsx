import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";


type DialogsType ={
    dialogsData: Array<{ id: number; name: string }>
    messagesData: Array<{ id: number; message: string }>
}

export const Dialogs = (props:DialogsType) => {


        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {props.dialogsData.map(d=> <DialogsItem id={d.id} name={d.name}/>)}
                </div>
                <div className={s.messages}>
                    {props.messagesData.map(m=><Message message={m.message}/>)}
                </div>
            </div>
        );
    }
;

