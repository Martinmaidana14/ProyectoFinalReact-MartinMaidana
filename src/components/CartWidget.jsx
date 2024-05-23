
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

import cart from "../assets/cart1.png";



export const CartWidget = () => {

    const { items } = useContext(CartContext);

    const totalQuantity  = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link to="/Cart" className="d-flex align-items-center">
            <img src={cart} className="cart-widget" alt="eCommerce Shop" width={40} />

            {totalQuantity > 0 ? (
                <div className="quantityBadge">{totalQuantity}</div>
            ) : null}
        </Link>
    );
};
