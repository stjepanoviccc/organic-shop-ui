import { useState, useRef } from 'react';
import { useSearchQueryUpdate } from '../../../context/SearchContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faX } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';

const SearchContainer = () => {
    const [searchState, setSearchState] = useState(false);
    const updateSearchQuery = useSearchQueryUpdate();
    const searchRef = useRef();

    const searchHandler = () => {
        updateSearchQuery(searchRef.current.value)
        searchRef.current.value = '';
        setSearchState(prev => true);
    }

    const resetSearch = () => {
        searchRef.current.value = '';
        updateSearchQuery(searchRef.current.value);
        setSearchState(prev => false);
    }

    return (
        <>
            {searchState === true && (
                <button className={styles.resetButton} onClick={resetSearch}>
                    <FontAwesomeIcon icon={faX} size="sm" /><span className={styles.searchSpanText}>Reset Search Filter</span>
                </button>)}
            <div className={styles.searchWrap}>
                <input ref={searchRef} className={styles.searchInput} type="text" placeholder="Search products..." />
                <button className={styles.searchButton} onClick={searchHandler}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </>
    )
};

export default SearchContainer;