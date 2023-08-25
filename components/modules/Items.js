import React from 'react';
import styles from "./Items.module.css"
import Fast from '../icons/Fast'
import Food from '../icons/Food'
import Choice from '../icons/Choice'
import Clock from '../icons/Clock'


function Items(props) {
    return (
        <div className={styles.container}>
            <h2>Why us?</h2>
            <div className={styles.items}>
                <div>
                    <Fast />
                    <span>Fast</span>
                </div>
                <div>
                    <Food />
                    <span>Best Restaurants</span>

                </div>
                <div>
                    <Choice />
                    <span>Your Choice</span>
                </div>
                <div>
                    <Clock />
                    <span>24-7</span>
                </div>
            </div>
            
        </div>
    );
}

export default Items;