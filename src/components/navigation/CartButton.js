import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './CartButton.module.scss';

const CartButton = () => {
    return (
        <>
            <button className={styles.cartPriceButton}>0.00$</button>
            <button className={styles.cartButton}>
                <div className={styles.cartItemsCounterHolder}>0</div>
                <FontAwesomeIcon icon={faCartShopping} className={styles.cartIcon} />
            </button>
        </>
    )
};

export default CartButton;