import { Link } from 'react-router-dom';
import styles from './ShopHeader.module.scss';

const ShopHeaderContainer = () => {
    const url = window.location.href.split('/');
    const lastSegment = url[url.length - 1];
    const capitalizedSegment = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

    return (
        <div className={styles.shopHeaderWrap}>
            <p><Link to="/">Home</Link> / {capitalizedSegment}</p>
            <h1 className={styles.shopTitle}>{capitalizedSegment}</h1>
        </div>
    )
};

export default ShopHeaderContainer;