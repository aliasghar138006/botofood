import React from 'react';
import styles from './Card.module.css'
import Location from '../icons/Location'
import Dollar from '../icons/Dollar'
import Link from 'next/link';

function Card(props) {
    const {id , name , price , discount ,details  }  = props;
    return (
        <div className={styles.container}>
            <div>

            <img src={`images/${id}.jpeg`} alt='food' />
            </div>
            <div className={styles.middle}>
                <span>{name}</span>
                <span>
                    <Location />
                    {details[0].Cuisine}
                </span>
                
                
            </div>
            <div className={styles.price}>

                <Dollar />
                <span style={discount ? {color:'red'} : null}>

                {discount ? (price*(100-discount))/100  : price}$
                </span>
            </div>

            <div>
            <span className={styles.discount} style={!discount ? {display:'none'} : null}>

            {discount ?<span>{discount}%</span> :null}
            </span>
            </div>
            
            <Link href={`menu/${id}`} legacyBehavior><a>See details</a></Link>
        </div>
    );
}

export default Card;