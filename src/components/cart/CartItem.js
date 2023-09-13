import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CartItem.module.scss';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartActions.addToCart({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: 1
        }));
    };

    const removeFromCartHandler = () => {
        dispatch(cartActions.removeFromCart({
            id: item.id,
            price: item.price
        }))
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