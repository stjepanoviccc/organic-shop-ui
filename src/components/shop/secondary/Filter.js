import DoubleRangedSlider from './DoubleRangedSlider';
import styles from './Filter.module.scss';

const FilterContainer = () => {
    return (
            <div className={styles.filterWrap}>
                <h4 className={styles.filterTitle}>Filter by price</h4>
                <DoubleRangedSlider />
            </div>
    )
};

export default FilterContainer;