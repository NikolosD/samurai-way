import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Nick</div>
                <div className={s.dialog}>Vasya</div>
                <div className={s.dialog}>Vera</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Ola!</div>
                <div className={s.message}>Coma esta?</div>
            </div>
        </div>
    );
};

