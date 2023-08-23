import FilterContainer from './secondary/Filter';
import CategoriesContainer from './secondary/Categories';
import PopularContainer from './secondary/Popular';
import ShopHeader from './primary/ShopHeader';
import MainProducts from './primary/MainProducts';
import styles from './Shop.module.scss';
// <FilterContainer /> this add
const ShopContainer = () => {
    return (
        <section className={styles.shopSection}>
            <div className={styles.mainWrap}>
                <div className={styles.shopWrap}>
                    <div className={styles.shopSecondaryWrap}>
                        
                        <CategoriesContainer />
                        <PopularContainer />
                    </div>
                    <div className={styles.shopPrimaryWrap}>
                        <ShopHeader />
                        <MainProducts />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ShopContainer;