import { Link } from 'react-router-dom';
import { useSearchQuery } from '../../../context/SearchContext';
import styles from './ShopHeader.module.scss';

const ShopHeaderContainer = () => {
    const searchCtx = useSearchQuery();
    const searchQuery = `/ Search results for "${searchCtx.searchQuery}"`;
    const url = window.location.href.split('/');
    const lastSegment = url[url.length - 1];
    const capitalizedSegment = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
 
    return (
        <div className={styles.shopHeaderWrap}>
            <p><Link to="/">Home</Link> / {capitalizedSegment} {searchCtx.searchQuery !== '' && searchQuery}</p>
            <h1 className={styles.shopTitle}>{capitalizedSegment}</h1>
        </div>
    )
};

export default ShopHeaderContainer;