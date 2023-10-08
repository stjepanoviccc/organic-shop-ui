import styles from './SortDropdown.module.scss';

const SortDropdownMenu = ({ sortMethod, changeSortMethod }) => {
    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        changeSortMethod(selectedValue);
    };

    return (
        <form className={styles.sortForm}>
            <select name="sort" id="sort" className={styles.customSelect} onChange={handleSortChange} value={sortMethod}>
                <option value="byDefault">Default sorting</option>
                <option value="byLowest">Sort by price: low to high</option>
                <option value="byHighest">Sort by price: high to low</option>
            </select>
        </form>
    )
};

export default SortDropdownMenu;

export const sortProducts = (method, products) => {
    if (method === "byLowest") {
        return [...products].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (method === "byHighest") {
        return [...products].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else {
        return products;
    };
};