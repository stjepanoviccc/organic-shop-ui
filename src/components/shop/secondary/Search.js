import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';

const SearchContainer = () => {

    return (
        <div className={styles.searchWrap}>
            <input className={styles.searchInput} type="text" placeholder="Search products..." />
            <button className={styles.searchButton}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    )
};

export default SearchContainer;