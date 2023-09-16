import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

type SelectedLinkProps = {
    isActive: boolean;
}

const setActive = ({isActive}:SelectedLinkProps) => isActive ? `${s.active}` : `${s.item}`;

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <div className={s.item}>
                    <NavLink className={setActive} to="/profile">Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={setActive} to="/dialogs">Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={setActive} to="/news">News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={setActive} to="/settings">Settings</NavLink>
                </div>
            </ul>
        </nav>
    );
};

