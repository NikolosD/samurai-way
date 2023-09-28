import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {

        let dialogsData = [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Nick'},

        ]

        type DialogsItemPropsType = {
            id: number
            name: string
        }

        const DialogsItem = (props: DialogsItemPropsType) => {
            let path = "dialogs/*" + props.id

            return <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        }

        type MessagePropsType = {
            message: string
        }

        const Message = (props: MessagePropsType) => {
            return (
                <div className={s.message}>{props.message}</div>
            )
        }

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogsItem name='Nick' id={1}></DialogsItem>
                    <DialogsItem name='Vasya' id={2}></DialogsItem>
                    <DialogsItem name='Vera' id={3}></DialogsItem>
                </div>
                <div className={s.messages}>
                    <Message message={'Hello'}/>
                    <Message message={'Ola!'}/>
                    <Message message={'Coma esta?'}/>
                </div>
            </div>
        );
    }
;

