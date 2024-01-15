import React from 'react';
import preloader from  '../../assets/images/bouncing-circles.svg';
import styles from './Preloader.module.css';

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} className={styles.preloader} alt=""/>
        </div>
    );
};
