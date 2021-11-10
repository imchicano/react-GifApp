import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GiftApp = () => {

    const [Categories, setCategories] = useState(['']);

    // const handleAdd = () =>{
    //     setCategories( cats => [...cats, 'NFL']);
    // }

    return (
        <div>
            <h2>Bienvenido a Gift-App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    Categories.map( Category => (
                    
                        <GifGrid
                            key={Category}
                            category={Category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}

export default GiftApp;