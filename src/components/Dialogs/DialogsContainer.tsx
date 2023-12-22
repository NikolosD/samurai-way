import React, {ChangeEvent} from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";

import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../redux/StoreContext";


type DialogsContainerType = {}

export const DialogsContainer = (props: DialogsContainerType) => {

    return (
        <StoreContext.Consumer>
            {store => {
                const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    store.dispatch(updateNewMessageTextAC(e.currentTarget.value))
                }

                const addMessageHandler = () => {
                    store.dispatch(addMessageAC(newMessageText))

                }

                let newMessageText = store.getState().messagesPage.newMessageText


                return (
                    <Dialogs state={store.getState()} addMessage={addMessageHandler}
                             onMessageChange={onMessageChangeHandler} />
                );

            }}
        </StoreContext.Consumer>
    )
}

