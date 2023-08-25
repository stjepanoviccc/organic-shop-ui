import { Link } from 'react-router-dom';
import { useProductsData } from '../../../context/FetchDataContext';
import ProductCard from '../../UI/cards/ProductCard';
import styles from './OnSale.module.scss';

const OnSaleContainer = () => {
    const products = useProductsData();
    const onSaleProducts = products.filter(product => product.discount > 0);

    return (
        <div className={styles.onSaleWrap}>
            {onSaleProducts.map((product, index) => (
                <Link key={`link_${index}`} to="/"><ProductCard key={index} data={product} /></Link>
            ))}
        </div>
    )
}

export default OnSaleContainer;