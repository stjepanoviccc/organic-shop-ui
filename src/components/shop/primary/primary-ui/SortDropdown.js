import styles from './SortDropdown.module.scss';

const SortDropdownMenu = () => {
    return (
        <form className={styles.sortForm}>
            <select name="sort" id="sort" className={styles.customSelect}>
                <option className={styles.customOption} value="sortDefault">Default sorting</option>
                <option className={styles.customOption} value="sortPopular">Sort by popularity</option>
                <option className={styles.customOption} value="sortAverage">Sort by average rating</option>
                <option className={styles.customOption} value="sortLatest">Sort by latest</option>
                <option className={styles.customOption} value="sortLowest">Sort by price: low to high</option>
                <option className={styles.customOption} value="sortHighest">Sort by price: high to low</option>
            </select>
        </form>
    )
};

export default SortDropdownMenu;