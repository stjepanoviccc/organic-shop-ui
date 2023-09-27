import { Link } from 'react-router-dom';
import { useProductsData } from '../../../context/FetchDataContext';
import styles from './Categories.module.scss';

const CategoriesContainer = () => {
    const products = useProductsData();
    const categoryCounter = {
        All: products.length
    };
    products.forEach(product => {
        categoryCounter[product.category] = (categoryCounter[product.category] || 0) + 1;
    });

    return (
        <div className={styles.categoriesWrap}>
            {Object.keys(categoryCounter).map((category, index) => (
                <div key={`item-${index}`}className={styles.categoryItem}>
                    <Link className={styles.categoryLink} to={`/${category === 'All' ? 'shop' : 'product-category/'+category.toLowerCase()}`} key={`link-${index}`}>{category}</Link>
                    <span className={styles.numberSpan}>({categoryCounter[category]})</span>
                </div>
            ))}
        </div>
    );
};

export default CategoriesContainer;