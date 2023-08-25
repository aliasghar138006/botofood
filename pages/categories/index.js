import React from 'react';
import CategoriesPage from '../../components/templates/CategoriesPage';


function Categories({data}) {
    return (
       <CategoriesPage data = {data} />
    );
}

export default Categories;


export async function getServerSideProps(context){
    const {query : {difficulty , time}} = context;
    const res = await fetch(`${process.env.BASE_URL}/data`);
    const data = await res.json();
    
    const difficultyResult = data.filter(item => (item.details[2].Difficulty == difficulty) )
        
        
    const timeResult = data.filter(item => {
        const timeSplit =  item.details[4]['Cooking Time'].split(" ")
        if (+timeSplit[0] > 30 && time == 'more'){
            return item;
        } else if(+timeSplit[0] <= 30 && time=='less'){
            return item
        }
    });



    if(difficultyResult.length && !timeResult.length && time==""){
        return {
            props:{
                data : difficultyResult
            }
        }
    } else if (timeResult.length && difficultyResult.length && difficulty && time){
        const data = difficultyResult.concat(timeResult);
        return {
            props : {
                data
            }
        }  
    }
    else {
        return {
            props :{
                data : timeResult
            }
        }
    }
    
}

