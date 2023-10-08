import { useState, useEffect } from 'react';
import { useProductsData } from '../../../context/FetchDataContext';
import { usePricesData } from '../../../context/ShopPriceContext';
import { useSearchQuery } from '../../../context/SearchContext';
import { sortProducts } from "./SortDropdown";
import Pagination from './Pagination';
import SortDropdown from './SortDropdown';
import ProductCard from '../../UI/cards/ProductCard';
import styles from './MainProducts.module.scss';

const MainProductsContainer = ({ category }) => {
    const [sortMethod, setSortMethod] = useState('byDefault');
    let productsData = useProductsData();
    productsData = sortProducts(sortMethod || "byDefault", [...productsData]);
    const pricesCtx = usePricesData();

    // for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;
    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    
    // filtering based on category and price
    const filteredProducts =
        productsData.filter(product => (
            (category === 'ALL' || product.category.toUpperCase() === category) &&
            Number(product.price) >= pricesCtx.currentMin && Number(product.price) <= pricesCtx.currentMax)
        );
    const numberOfProducts = filteredProducts.length;
    let currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
    
    // search filtering
    const searchCtx = useSearchQuery();
    const [searchCount, setSearchCount] = useState(null);
    const searchedProducts = currentProducts.filter(product => product.title.toLowerCase().includes(searchCtx.searchQuery.toLowerCase()));
    
    const changeSortMethod = (selectedValue) => {
        setSortMethod(prev => selectedValue);
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [category])

    useEffect(() => {
        setSearchCount(prev => searchedProducts.length);
    }, [searchedProducts])

    return (
        <>
            <div className={styles.sortWrap}>
                {searchCtx.searchQuery === '' && <p>Showing {indexOfFirst}-{indexOfLast > numberOfProducts ? numberOfProducts : indexOfLast} of {numberOfProducts} results</p>}
                {searchCtx.searchQuery !== '' && <p>Showing all {searchCount} results</p>}
                <SortDropdown sortMethod={sortMethod} changeSortMethod={changeSortMethod} />
            </div>
            <div className={numberOfProducts > 0 ? styles.mainProductsWrap : styles.mainProductsWrapError}>
                {numberOfProducts > 0 && searchCtx.searchQuery === '' &&
                    currentProducts.map((product, index) => <ProductCard key={index} data={product} />)}

                {numberOfProducts > 0 && searchCtx.searchQuery !== '' &&
                    currentProducts.filter(product => product.title.toLowerCase().includes(searchCtx.searchQuery.toLowerCase())).map((product, index) => <ProductCard key={index} data={product} />)}

                {(searchCtx.searchQuery !== '' && searchedProducts.length === 0) && (
                    <div className={styles.errorHolder}>
                        <p className={styles.titleErrorText}>Search results: "{searchCtx.searchQuery}"</p>
                        <p className={styles.bodyErrorText}>No products were found matching your selection.</p>
                    </div>
                )}

                {searchCtx.searchQuery === '' && numberOfProducts === 0 && (
                    <div className={styles.errorHolder}>
                        <p className={styles.titleErrorText}>Check Price Filtering</p>
                        <p className={styles.bodyErrorText}>No products were found matching your selection.</p>
                    </div>
                )}
            </div>
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                numberOfProducts={numberOfProducts}
                productsPerPage={productsPerPage}
            />
        </>
    )
};

export default MainProductsContainer;