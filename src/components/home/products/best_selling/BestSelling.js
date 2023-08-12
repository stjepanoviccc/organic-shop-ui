import useCheckImagePath from '../../../../custom_hooks/CheckImagePath';
import ProductCard from '../../../UI/cards/ProductCard';
import styles from './BestSelling.module.scss';

const BestSellingContainer = () => {
    const smallLeafImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/logo-leaf-new.png`, './static/media/logo-leaf-new.png');

    return (
        <div className={styles.mainWrap}>
            <div className={styles.bestSellingWrap}>
                <h2 className={styles.title}>Best Selling Products</h2>
                <img className={styles.leafImg} src={smallLeafImage} alt="img" />
                <div className={styles.bestSellingProductsWrap}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard sale={true} />
                </div>
            </div>
        </div>

    )
};

export default BestSellingContainer;