
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
            <Row className=''>
                <Col className='md-6 order-md-1'>
                    <img src={product.image} alt={product.title} width="280px" className="ItemImg d-block w-65" />
                </Col>
                <Col className='md-6 order-md-2'>
                    <h2 className="infoheader">
                        {product.title}
                    </h2>

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

                    <div className="d-grid gap-3 col-10 mx-auto">
                        <ItemCount stock={product.stock} onAdd={add} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};





/*
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
*/