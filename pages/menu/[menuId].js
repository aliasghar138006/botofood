import React from 'react';
import DetailPage from '../../components/templates/DetailPage';
import {useRouter} from 'next/router'

function MenuDetails({data}) {
    const router = useRouter()
    console.log(router);

    if(router.isFallback){
        return (
            <h2>Loading...</h2>
        )
    }
    return (
        <DetailPage {...data} />
    );
}

export default MenuDetails;


export async function getStaticProps(context){
    const {params} = context
    const res = await fetch(`${process.env.BASE_URL}/data/${params.menuId}`)
    const data = await res.json()
    return {
        props:{data},
        revalidate:+process.env.REVALIDATE
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.BASE_URL}/data`)
    const data = await res.json()
    const result = data.slice(0,5)
    const paths = result.map(item => ({params:{menuId:item.id.toString()}}))

    return {
        paths,
        fallback:true,
    }
}