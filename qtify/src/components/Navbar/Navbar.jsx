import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from './Logo'; 
import Search from './Search'; 
import Button from './Button'; 

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <Logo />
            </Link>
            <Search placeholder="Search a song of your choice" />
            <Button>Give Feedback</Button>
        </nav>
    );
}

export default Navbar;
