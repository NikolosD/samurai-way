import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";



import { DialogData, MessageData} from "../../redux/store";
import {DialogsPageType} from "../../redux/dialogs-reducer";



type DialogsType = {
    state: DialogsPageType
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

    let state = props.state.messagesData
    let newMessageText = props.state.newMessageText
    let dialogsElement = props.state.dialogsData.map((d:DialogData) => <DialogsItem id={d.id} name={d.name} key={d.id}/>  )
    let messageElement = props.state.messagesData.map((m:MessageData) =>  <Message message={m.message} key={m.id} />)

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

