import { useState } from 'react';
import Cart from '../cart/Cart';
import Backdrop from '../UI/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './CartToggler.module.scss';

const CartToggler = () => {
    const [isActive, setIsActive] = useState(false);
    const toggleCart = () => {
        setIsActive(prevState => !prevState);
    }

    return (
        <>
            <Backdrop toggle={toggleCart} inProp={isActive} />
            <Cart toggleCart={toggleCart} inProp={isActive} />
            <button className={styles.cartPriceButton} onClick={toggleCart}>0.00$</button>
            <button className={styles.cartToggler} onClick={toggleCart}>
                <div className={styles.cartItemsCounterHolder}>0</div>
                <FontAwesomeIcon icon={faCartShopping} className={styles.cartIcon} />
            </button>
        </>
    )
};

export default CartToggler;