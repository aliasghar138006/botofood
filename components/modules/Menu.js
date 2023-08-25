import React from 'react';
import styles from './Menu.module.css'

function Menu() {
    return (
        <div className={styles.container}>
            <div>Menu</div>
            <div>Categories</div>
            <div>Discount</div>
        </div>
    );
}

export default Menu;