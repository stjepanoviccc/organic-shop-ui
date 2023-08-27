import styles from './SortDropdown.module.scss';

const SortDropdownMenu = () => {
    return (
        <form className={styles.sortForm}>
            <select name="sort" id="sort" className={styles.customSelect}>
                <option value="sortDefault">Default sorting</option>
                <option value="sortPopular">Sort by popularity</option>
                <option value="sortAverage">Sort by average rating</option>
                <option value="sortLatest">Sort by latest</option>
                <option value="sortLowest">Sort by price: low to high</option>
                <option value="sortHighest">Sort by price: high to low</option>
            </select>
        </form>
    )
};

export default SortDropdownMenu;