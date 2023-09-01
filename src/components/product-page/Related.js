import ProductCard from '../UI/cards/ProductCard';
import styles from './Related.module.scss';

const RelatedProducts = ({relatedProducts}) => {
    return (
        <div className={styles.relatedProductsWrap}>
            <h2 className={styles.mainTitle} style={{ textAlign: 'left' }}>Related products</h2>
            <div className={styles.relatedProducts}>
                {relatedProducts.map((product, index) => (
                    <ProductCard key={index} data={product} />
                ))}
            </div>
        </div>
    )
};

export default RelatedProducts;