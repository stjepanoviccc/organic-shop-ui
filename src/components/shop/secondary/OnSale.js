import { useProductsData } from '../../../context/FetchDataContext';
import ProductCard from '../../UI/cards/ProductCard';
import styles from './OnSale.module.scss';

const OnSaleContainer = () => {
    const products = useProductsData();
    const onSaleProducts = products.filter(product => product.discount > 0);

    return (
        <div className={styles.onSaleWrap}>
            {onSaleProducts.map((product, index) => (
                <ProductCard key={index} data={product} />
            ))}
        </div>
    )
}

export default OnSaleContainer;