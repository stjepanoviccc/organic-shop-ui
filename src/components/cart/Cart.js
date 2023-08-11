import { useRef } from 'react';
import { Transition } from 'react-transition-group';
import CloseButton from '../UI/buttons/CloseButton';
import GreenButton from '../UI/buttons/GreenButton';
import styles from './Cart.module.scss';

const Cart = ({ toggleCart, inProp }) => {
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
                        <p className={styles.cartEmptyText}>No products in the cart.</p>
                    </div>
                    <div className={styles.cartFooter}>
                        <GreenButton>Continue Shopping</GreenButton>
                    </div>
                </div>
            )}
        </Transition>
    )
}

export default Cart;