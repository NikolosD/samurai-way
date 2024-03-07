import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    login: string | null
    isAuth: boolean
    logout: ()=> void
}
export const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <img
                src="https://static.vecteezy.com/system/resources/previews/001/191/986/original/circle-logo-png.png"
                alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ? (
                    <div>
                        {props.login}  <button onClick={props.logout}>Logout</button>
                    </div>
                ) : (
                    <NavLink to="/login"><button>Login</button></NavLink>
                )}
            </div>
        </header>
    );
};

