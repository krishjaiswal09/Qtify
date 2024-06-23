import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo'; 
import Search from '../Search/Search'; 
import Button from '../Button/Button'; 

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <Logo />
            </Link>
            <Search />
            <Button>Give Feedback</Button>
        </nav>
    );
}

export default Navbar;
