
import cart from "../assets/cart1.png";



export const CartWidget = () => {

    return (
        <div id="cart-widget">
            <img src={cart} alt="Cart" width={40} />
            <span>89</span>
        </div>
    );
};