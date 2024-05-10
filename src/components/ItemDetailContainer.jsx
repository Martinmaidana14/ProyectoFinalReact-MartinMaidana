
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
//import { ItemCount } from "./ItemCount";
import { getFirestore, getDoc, doc } from 'firebase/firestore';

import { ItemDetail } from "./ItemDetail"


export const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        
        const db = getFirestore();

        const refDoc = doc(db, "Items", id);


        getDoc(refDoc).then((snapshot) => {
            setProduct({ id: snapshot.id, ...snapshot.data() });
        });
    }, [id]);

    //Retorno temprano
    if(!product) return <div>"loading"</div>;

    return (
        <ItemDetail product={product}/>
    );
};

