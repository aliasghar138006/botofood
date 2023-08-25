import React from 'react';
import styles from './DetailPage.module.css'
import Location from '../icons/Location';
import Dollar from '../icons/Dollar';
import Link from 'next/link';

function DetailPage(data) {
    const uid = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6},

    ]
    const {id , name , details , price , discount , introduction , ingredients , recipe} = data
    return (
        <div className={styles.container}>
            <h2>Details</h2>
            <div className={styles.banner}>
                <img src={`/images/${id}.jpeg`} alt={name} />
                <div className={styles.right}>
                    <span>{name}</span>
                    <div className={styles.location}>
                        <Location />
                        <span>{details[0].Cuisine}</span>
                    </div>
                    <div className={styles.price}>
                        <Dollar />
                        <span>
                            {discount ? (price*(100-discount))/100 :price}$
                        </span>
                    </div>
                    <div className={styles.off} style={!discount ? {display:'none'} : {display:'block'}}>
                        {discount}% OFF
                    </div>
                </div>
            </div>
            <div className={styles.introduction}>
                {introduction}
            </div>
            <div className={styles.details}>
                <h2>Details</h2>
                <ul>
                    {details.map((value , index) => <li key={index}>{Object.keys(value)} : <span style={{color:'#a2a2a2'}}>{Object.values(value)}</span></li>)}
                </ul>
            </div>

            <div className={styles.ingredients}>
                <h2>Ingredients</h2>
                {ingredients.map((item , index) => <p key={index}>{item}</p>)}
            </div>

            <div className={styles.recipe}>
                <h2>Recipe</h2>
                {recipe.map((item , index) => <div key={index} className={index %2 ? styles.even : styles.odd}><span className={styles.num}>{index+1}</span> <span className={styles.des}>{item}</span></div>)}
            </div>

            <Link href='/' legacyBehavior><a className={styles.buy}>Add to Cart</a></Link>


        </div>
    );
}

export default DetailPage;