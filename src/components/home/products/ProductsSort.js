import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import ProductCard from '../../UI/cards/ProductCard';
import styles from './ProductsSort.module.scss';

const ProductsSortContainer = ({type}) => {
    const section = type + 'Section';
    const title =
    type === 'bestSelling' ? 'Best Selling Products' :
    type === 'trending' ? 'Trending Products' : null;

    const smallLeafImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/logo-leaf-new.png`, './static/media/logo-leaf-new.png');

    return (
        <section className={section}>
        <div className={styles.mainWrap}>
            <div className={styles.productsMainWrap}>
                <h2 className={styles.mainTitle}>{title}</h2>
                <img className={styles.leafImg} src={smallLeafImage} alt="img" />
                <div className={styles.productsWrap}>
                    <p style={{color: 'red'}}>ADD SHOP CARDS HERE</p>
                </div>
            </div>
        </div>
        </section>
    )
};

export default ProductsSortContainer;