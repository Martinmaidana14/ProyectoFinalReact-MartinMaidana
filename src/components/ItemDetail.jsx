
import Container from 'react-bootstrap/Container';
import { useContext } from 'react';

import { ItemCount } from './ItemCount';
import { CartContext } from '../contexts/CartContext';


export const ItemDetail = ({ product }) => {

    const { addItem } = useContext(CartContext);

    const add = (quantity) => {
        addItem(product, quantity);
    };

    return (
        <Container className='mt-4'>
            <article className='Card'>
                <header className="Header">
                    <h2 className="infoheader">
                        {product.title}
                    </h2>
                </header>
                <picture>
                    <img src={product.image} alt={product.title} width="280px" className="ItemImg" />
                </picture>
                <section>
                    <p className="info">
                        Categoria: {product.categoryId}
                    </p>
                    <p className="info">
                        Descripcion: {product.description}
                    </p>
                    <p className="info">
                        Precio: ${product.price}
                    </p>
                    <p className="info">
                        Stock: {product.stock}
                    </p>
                </section>
                <footer className="ItemFooter">
                    <ItemCount stock={product.stock} onAdd={add} />
                </footer>
            </article>
        </Container>
    );
};