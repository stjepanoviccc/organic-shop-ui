import React, { useState, useContext } from "react";

const CartContext = React.createContext();
const CartContextUpdate = React.createContext();

const CartProvider = (props) => {
    const [isActive, setIsActive] = useState(false);
    const toggleCart = () => {
        setIsActive(prevState => !prevState);
    };

    return (
        <CartContext.Provider value={isActive}>
            <CartContextUpdate.Provider value={toggleCart}>
                {props.children}
            </CartContextUpdate.Provider>
        </CartContext.Provider>
    )
};

export const useCart = () => {
    return useContext(CartContext);
};

export const useCartUpdate = () => {
    return useContext(CartContextUpdate);
};

export default CartProvider;