import {useProductsData} from '../../../context/FetchDataContext';
import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import ProductCard from '../../UI/cards/ProductCard';
import styles from './ProductsSort.module.scss';

const ProductsSortContainer = ({type}) => {
    const products = useProductsData();
    const firstFourProducts = products.slice(0, 4); // later will add based on sort

    const section = type + 'Section';
    const title =
    type === 'bestSelling' ? 'Best Selling Products' :
    type === 'trending' ? 'Trending Products' : null;

    const smallLeafImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/logo-leaf-new-min.png`, './static/images/logo-leaf-new-min.png');

    return (
        <section className={section}>
        <div className={styles.mainWrap}>
            <div className={styles.productsMainWrap}>
                <h2 className={styles.mainTitle}>{title}</h2>
                <img className={styles.leafImg} src={smallLeafImage} alt="img" />
                <div className={styles.productsWrap}>
                    {firstFourProducts.map((product, index) => (
                        <ProductCard key={index} data={product} />
                    ))}
                </div>
            </div>
        </div>
        </section>
    )
};

export default ProductsSortContainer;