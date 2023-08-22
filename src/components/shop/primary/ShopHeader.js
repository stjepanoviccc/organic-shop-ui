import { Link } from 'react-router-dom';
import SortDropdown from './primary-ui/SortDropdown';
import styles from './ShopHeader.module.scss';

const ShopHeaderContainer = () => {
    
    return (
        <div className={styles.shopHeaderWrap}>
            <p><Link to="/">Home</Link> / Shop</p>
            <h1 className={styles.shopTitle}>Shop</h1>
            <div className={styles.sortWrap}>
                <p>Showing 1-9 of 12 results</p>
                <SortDropdown />
            </div>
        </div>
    )
};

export default ShopHeaderContainer;