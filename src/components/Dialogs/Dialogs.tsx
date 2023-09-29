import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {

        let dialogsData = [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Nick'},
        ]

    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Ola!'},
        {id: 3, message: 'Coma esta?'},

    ]

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsData.map(d=> <DialogsItem id={d.id} name={d.name}/>)}
                </div>
                <div className={s.messages}>
                    {messagesData.map(m=><Message message={m.message}/>)}
                </div>
            </div>
        );
    }
;

