import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store';
import { Transition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import CloseButton from '../UI/buttons/CloseButton';
import GreenButton from '../UI/buttons/GreenButton';
import styles from './Cart.module.scss';

const Cart = ({ toggleCart, inProp }) => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const username = localStorage.getItem('loggedName');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://react-organic-shop-5b019-default-rtdb.firebaseio.com/users/${username}/currentState.json`);
            const data = await response.json();
            if (data !== null) {
                dispatch(cartActions.swapCartData({ data }));
            }
            setLoading(false);
        }
        fetchData();
    }, [dispatch, username])

    const items = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const nodeRef = useRef(null);

    if (loading === true) {
        return <p>Loading...</p>
    }
    else {
        return (
            <Transition nodeRef={nodeRef} in={inProp} timeout={300} mountOnEnter unmountOnExit>
                {state => (
                    <div className={`${styles.cart} ${state === 'entered' ? styles.active : ''}`}>
                        <div className={styles.cartHeader}>
                            <h4>Shopping Cart</h4>
                            <CloseButton close={toggleCart} />
                        </div>
                        <div className={styles.cartBody}>
                            {items.length === 0 ?
                                <p className={styles.cartEmptyText}>
                                    {isAuth && "No products in the cart."}
                                    {!isAuth && "Must be logged in to have cart functionalities."}
                                </p> :
                                items.map((item, index) => (
                                    item.quantity > 0 && <CartItem key={index} item={item} />
                                ))
                            }
                        </div>
                        <div className={styles.cartFooter}>
                            {items.length > 0 && <p className={styles.cartTotalAmount}>TOTAL: {totalAmount}$</p>}
                            {items.length > 0 && (
                                <GreenButton style={{paddingTop: '0', paddingBottom:'0'}}>
                                    <Link onClick={toggleCart} style={{width:'100%', paddingTop:'17px', paddingBottom: '17px'}} to="/checkout">Proceed To Checkout</Link>
                                </GreenButton>)}
                            <GreenButton onClick={toggleCart}>Continue Shopping</GreenButton>
                        </div>
                    </div>
                )}
            </Transition>
        )
    }
}

export default Cart;