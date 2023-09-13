import { useCart, useCartUpdate } from '../../context/CartContext';
import { useSelector } from 'react-redux';
import Cart from '../cart/Cart';
import Backdrop from '../UI/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './CartToggler.module.scss';

const CartToggler = () => {
    const cartQuantity = useSelector(state => state.cart.totalQuantity);
    const isActive = useCart();
    const toggle = useCartUpdate();

    return (
        <>
            <Backdrop toggle={toggle} inProp={isActive} />
            <Cart toggleCart={toggle} inProp={isActive} />
            <button className={styles.cartPriceButton} onClick={toggle}>0.00$</button>
            <button className={styles.cartToggler} onClick={toggle}>
                <div className={styles.cartItemsCounterHolder}>{cartQuantity}</div>
                <FontAwesomeIcon icon={faCartShopping} className={styles.cartIcon} />
            </button>
        </>
    )
};

export default CartToggler;