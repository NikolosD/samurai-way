import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    login: string | null
    isAuth: boolean
}
export const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <img
                src="https://static.vecteezy.com/system/resources/previews/001/191/986/original/circle-logo-png.png"
                alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

