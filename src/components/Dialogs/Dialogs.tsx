import React from 'react';
import { Formik, Field, Form } from 'formik';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";

import { DialogData, MessageData} from "../../redux/store";
import {DialogsPageType} from "../../redux/dialogs-reducer";


type DialogsType = {
    state: DialogsPageType
    addMessage: (newMessageText: string) => void
    isAuth: boolean
}

export const Dialogs = (props: DialogsType) => {
    let state = props.state
    let dialogsElement = state.dialogsData.map((d:DialogData) => <DialogsItem id={d.id} name={d.name} key={d.id}/>  )
    let messageElement = state.messagesData.map((m:MessageData) =>  <Message message={m.message} key={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div>
                    <Formik
                        initialValues={{ message: '' }}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            props.addMessage(values.message);
                            resetForm();
                            setSubmitting(false);
                        }}
                    >
                        <Form>
                            <Field as='textarea' name='message' />
                            <button type='submit'>Add Message</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
};
