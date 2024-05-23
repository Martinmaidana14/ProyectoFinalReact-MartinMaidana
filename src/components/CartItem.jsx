
import { Container, Row, Col } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { GoTrash } from "react-icons/go";

export const CartItem = ({ categoryId, title, price, quantity }) => {
    const { removeItem } = useContext(CartContext);
    const handleRemove = () => removeItem(categoryId);

    return (
        <Container>
            <Row className="cartItemList">
                <Col>{title}</Col>
                <Col>{quantity}</Col>
                <Col>${price}</Col>
                <Col>
                    <GoTrash onClick={handleRemove} />
                </Col>
            </Row>
        </Container>
    );
};