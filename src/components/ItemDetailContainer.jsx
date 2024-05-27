
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
//import { ItemCount } from "./ItemCount";
import { ItemDetail } from "./ItemDetail"
import { Spinner } from 'react-bootstrap';
import { getFirestore, getDoc, doc } from 'firebase/firestore';


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        
        const db = getFirestore();

        const refDoc = doc(db, "Items", id);

        getDoc(refDoc).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() });
        });
    }, [id]);

    //Retorno temprano
    if(!item) return <div className="spinnerSt"><Spinner animation="border" variant="danger" /> </div>

    return (
        <ItemDetail {...item}/>
    );
};


