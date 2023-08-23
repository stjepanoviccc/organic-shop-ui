import FilterContainer from './secondary/Filter';
import CategoriesContainer from './secondary/Categories';
import PopularContainer from './secondary/Popular';
import ShopHeader from './primary/ShopHeader';
import MainProducts from './primary/MainProducts';
import styles from './Shop.module.scss';

const ShopContainer = ({category}) => {
    return (
        <section className={styles.shopSection}>
            <div className={styles.mainWrap}>
                <div className={styles.shopWrap}>
                    <div className={styles.shopSecondaryWrap}>
                        <FilterContainer />
                        <CategoriesContainer />
                        <PopularContainer />
                    </div>
                    <div className={styles.shopPrimaryWrap}>
                        <ShopHeader />
                        <MainProducts category={category} />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ShopContainer;