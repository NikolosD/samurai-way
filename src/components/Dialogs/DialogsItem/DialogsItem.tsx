import s from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsItemPropsType = {
    id: number
    name: string
}

export const DialogsItem = (props: DialogsItemPropsType) => {
    let path = "dialogs/" + props.id

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}