import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

type SelectedLinkProps = {
    isActive: boolean;
}

const setActive = ({isActive}: SelectedLinkProps) => isActive ? `${s.active}` : `${s.item}`;

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <div className={s.item}>
                    <NavLink to="/profile/" activeClassName={s.link_active} className={s.link}
                             href="/profile">Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.link_active} className={s.link}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.link_active} className={s.link}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.link_active} className={s.link}>Music</NavLink>
                </div>
                <div>
                    <NavLink to="/settings" activeClassName={s.link_active} className={s.link}>Settings</NavLink>
                </div>
                <div>
                    <NavLink to="/users" activeClassName={s.link_active} className={s.link}>Users</NavLink>
                </div>
            </ul>
        </nav>
    );
};

