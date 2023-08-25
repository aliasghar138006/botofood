import React, { useState } from 'react';
import styles from './CategoriesPage.module.css'
import {useRouter} from 'next/router';
import Card from '../modules/Card'

function CategoriesPage({data}) {
    console.log(data);

    const [query, setQuery] = useState({difficulty:"" , time:""});
    const router = useRouter()

    const ChangeHandler = (e) => {
       const result =  {...query , [e.target.name]:e.target.value}
       setQuery(result)
    }

    const SearchHandler = () => {
        router.push({
            pathname:'/categories',
            query
        })
    }
    return (
        <div className={styles.container}>
            <h2>Categories</h2>
            <div className={styles.options}>
                <select name='difficulty' onChange={ChangeHandler}>
                    <option value="">Difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                <select name='time' onChange={ChangeHandler}>
                    <option value="">Cooking Time</option>
                    <option value="more">More than 30 min</option>
                    <option value="less">Less than 30 min</option>
                </select>
                <button onClick={SearchHandler}>Search</button>
            </div>
            <div className={styles.cart}>

                {data.length ? data.map(item => <Card key={item.id} {...item} />) :

                    <div className={styles.image}>
                        <img src='/images/search.png' alt='search image' />
                    </div>
                }
            </div>
        </div>
    );
}

export default CategoriesPage;