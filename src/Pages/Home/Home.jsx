import React, { useState } from 'react'
import Header from '../Header/Header'
import Exploremenu from '../Exploremenu/Exploremenu'
import FoodDisplay from '../FoodDisplay/FoodDisplay';
import AppDownload from '../AppDownload/AppDownload';

export default function Home() {

    const [category, setCategory] = useState("All");

    return (
        <>
            <Header></Header>
            <Exploremenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
            <AppDownload></AppDownload>
        </>
    )
}
