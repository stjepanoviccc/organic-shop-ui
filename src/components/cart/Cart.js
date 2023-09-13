import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';
import CartItem from './CartItem';
import CloseButton from '../UI/buttons/CloseButton';
import GreenButton from '../UI/buttons/GreenButton';
import styles from './Cart.module.scss';

const Cart = ({ toggleCart, inProp }) => {
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => state.cart.items);
    const nodeRef = useRef(null);

    return (
        <Transition nodeRef={nodeRef} in={inProp} timeout={300} mountOnEnter unmountOnExit>
            {state => (
                <div className={`${styles.cart} ${state === 'entered' ? styles.active : ''}`}>
                    <div className={styles.cartHeader}>
                        <h4>Shopping Cart</h4>
                        <CloseButton close={toggleCart} />
                    </div>
                    <div className={styles.cartBody}>
                        {cartItems.length === 0 ?
                            <p className={styles.cartEmptyText}>No products in the cart.</p> :
                            cartItems.map((item, index) => (
                                item.quantity > 0 && <CartItem key={index} item={item} />
                            ))
                        }
                    </div>
                    <div className={styles.cartFooter}>
                        {cartItems.length > 0 && <p className={styles.cartTotalAmount}>TOTAL: {totalAmount}$</p>}
                        {cartItems.length > 0 && <GreenButton onClick={toggleCart}>Proceed To Checkout</GreenButton>}
                        <GreenButton onClick={toggleCart}>Continue Shopping</GreenButton>
                    </div>
                </div>
            )}
        </Transition>
    )
}

export default Cart;