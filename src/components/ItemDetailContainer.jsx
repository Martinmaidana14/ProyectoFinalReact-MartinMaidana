
import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import { useParams } from "react-router-dom";
import data from "../data/products.json";
//import { ItemCount } from "./ItemCount";

import { getFirestore, getDoc, doc } from 'firebase/firestore';


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
        <Container className='mt-4'>
            <article>
                <header>
                    <h2>
                        {product.title}
                    </h2>
                </header>
                <picture>
                    <img src={product.image} alt={product.title} width="280px" className="ItemImg" />
                </picture>
                <section>
                    <p>
                        Categoria: {product.categoryId}
                    </p>
                    <p>
                        Descripcion: {product.description}
                    </p>
                    <p>
                        Precio: ${product.price}
                    </p>
                </section>
                /*
                <footer className="ItemFooter">
                    <ItemCount initial={1} stock={product.stock} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)} />
                </footer>
                */
            </article>
        </Container>
    );
};

