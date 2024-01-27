import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, getFirestore,query,collection,where } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const {itemId}=useParams();
    const [prodData, setProdData] = useState([]);

    const db = getFirestore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(collection(db, 'items'), where('id', '==', itemId));

                const querySnapshot = await getDocs(q);
                const resData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProdData(resData);

                setProdData(resData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [itemId]);

    return <ItemDetail items={prodData} />;

}

export default ItemDetailContainer
