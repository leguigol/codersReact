import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import Home from '../pages/Home';
import ItemList from './ItemList';

const ItemListContainer = () => {

    const {catId}=useParams();
    const [catData, setCatData] = useState([]);
    const [prodData, setProdData] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const myCategories = query(collection(db, 'categorias'));

        getDocs(myCategories)
            .then((resp) => {
                const catList = resp.docs.map((doc) => ({ catId: doc.id, ...doc.data() }));
                setCatData(catList);
            })
            .catch((error) => console.log(error));

        const myProducts = query(collection(db, 'items'));

        getDocs(myProducts)
            .then((resp) => {
                const prodList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProdData(prodList);
            })
            .catch((error) => console.log(error));
    }, []);

    if (catId !== undefined) {
        const prod_list= prodData.filter(item => item['categoria_id'] === parseInt(catId));
        const cat_info = catData.filter(item=>item['id']===catId);
        return <ItemList prod_list={prod_list} cat_info={cat_info} />;
    } else {
        return catData ? <Home products={prodData} /> : null;
    }

}

export default ItemListContainer
