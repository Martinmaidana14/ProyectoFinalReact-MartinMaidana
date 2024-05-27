
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

import cartImg from "../assets/cartImg.png";



export const CartWidget = () => {

    const { cart } = useContext(CartContext);

    const totalQuantity  = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link to="/Cart" className="d-flex align-items-center">
            <img src={cartImg} className="cart-widget" alt="eCommerce Shop" width={40} />

            {totalQuantity > 0 ? (
                <div className="quantityBadge">{totalQuantity}</div>
            ) : null}
        </Link>
    );
};
