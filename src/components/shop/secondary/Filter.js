import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import FilterInput from './secondary-ui/FilterInput';
import styles from './Filter.module.scss';

const FilterContainer = () => {
    return (
        <>
            <div className={styles.searchWrap}>
                <input className={styles.searchInput} type="text" placeholder="Search products..." />
                <button className={styles.searchButton}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className={styles.filterWrap}>
                <h4 className={styles.filterTitle}>Filter by price</h4>
                <FilterInput />
                <div className={styles.priceWrap}>
                    <input className={styles.priceInput} type="text" value="$10"></input>
                    <input className={styles.priceInput} type="text" value="$10"></input>
                </div>
            </div>
        </>
    )
};

export default FilterContainer;