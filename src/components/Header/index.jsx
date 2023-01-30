import logo from '../../assets/dark-logo.svg'
import styles from './style.module.css';
import { useState } from 'react';

function Header({click}) {

    function GoToHome(callback){
        callback(false)
    }

    
    return (
        <header className={styles.headerContainer}>
            <nav className={styles.navContainer}>
                <img className={styles.logo} src={logo} alt="Nu Kenzie logo"/>
                <button className={styles.homeButton} onClick={() => GoToHome(click)}>Home</button>
            </nav>
        </header>
    )
}

export default Header;