import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useProductsMap } from '../../context/FetchDataContext';
import { cartActions } from '../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CartItem.module.scss';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ item }) => {
    const [index, setIndex] = useState(0);
    const currentCart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const productQuery = useParams().productId;
    const productsMap = useProductsMap();
    const username = localStorage.getItem('loggedName');

    const addToCartHandler = () => {
        dispatch(cartActions.addToCart({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: 1
        }));
    };

    useEffect(() => {
        const afterAddToCart = async () => {
            if (username.length > 0) {
                try {
                    const response = await fetch(`https://react-organic-shop-5b019-default-rtdb.firebaseio.com/users/${username}/currentState.json`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            currentCart
                        }),
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP Error! Status: ${response.status}`);
                    }
                } catch (error) {
                    console.error('Fetch Error:', error);
                }
            }
        }
        afterAddToCart();
    }, [currentCart, username])

    useEffect(() => {
        // rerender 
    }, [productsMap, productQuery]);

    const doesItemExist = async () => {
        const response2 = await fetch(`https://react-organic-shop-5b019-default-rtdb.firebaseio.com/users/${username}/currentState/currentCart.json`);
        const data2 = await response2.json();
        if ('items' in data2) {
            console.log('pass')
        } else {
            fetch(`https://react-organic-shop-5b019-default-rtdb.firebaseio.com/users/${username}/currentState.json`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
    }

    const removeFromCartHandler = async () => {
        dispatch(cartActions.removeFromCart({
            id: item.id,
            price: item.price
        }));
        if (username.length > 0) {
            try {
                for (let i = 0; i < currentCart.items.length - 1; i++) {
                    if (currentCart.items[i].id === item.id) {
                        setIndex(i);
                    }
                }
                if (item.quantity === 1) {
                    const response = await fetch(`https://react-organic-shop-5b019-default-rtdb.firebaseio.com/users/${username}/currentState/currentCart/items/${index}.json`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    const data = {
                        totalAmount: currentCart.totalAmount - item.price,
                        totalQuantity: currentCart.totalQuantity - 1
                    }

                    // reduce totals and delete in database if items array is empty / doesn't exist.
                    dispatch(cartActions.reduceTotals({ data }));
                    doesItemExist();

                    if (!response.ok) {
                        throw new Error(`HTTP Error! Status: ${response.status}`);
                    }
                }
            } catch (error) {
                console.error('Fetch Error:', error);
            }
        }
    }

    return (
        <div className={styles.cartItemHolder}>
            <div className={styles.cartContentHolder}>
                <img className={styles.cartItemImage} src={item.image} alt={item.price}></img>
                <div className={styles.titleAndAmountHolder}>
                    <p className={styles.cartItemTitle}>{item.title}</p>
                    <p className={styles.cartItemAmount}>{item.quantity} x {item.price}$</p>
                </div>
            </div>
            <div className={styles.plusAndMinusHolder}>
                <button className={styles.cartItemButton} onClick={addToCartHandler}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <button className={styles.cartItemButton} onClick={removeFromCartHandler}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
        </div>
    )
};

export default CartItem;