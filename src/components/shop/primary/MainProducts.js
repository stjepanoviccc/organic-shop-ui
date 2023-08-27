import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProductsData } from '../../../context/FetchDataContext';
import { usePricesData } from '../../../context/ShopPriceContext';
import Pagination from './Pagination';
import SortDropdown from './SortDropdown';
import ProductCard from '../../UI/cards/ProductCard';
import styles from './MainProducts.module.scss';

const MainProductsContainer = ({ category }) => {
    const productsData = useProductsData();
    const pricesCtx = usePricesData();
    const [currentPage, setCurrentPage] = useState(1);
    // for pagination
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
    const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

    useEffect(() => {
        setCurrentPage(1);
    }, [category])

    return (
        <>
            <div className={styles.sortWrap}>
                <p>Showing {indexOfFirst}-{indexOfLast > numberOfProducts ? numberOfProducts : indexOfLast} of {numberOfProducts} results</p>
                <SortDropdown />
            </div>
            <div className={numberOfProducts > 0 ? styles.mainProductsWrap : styles.mainProductsWrapError}>
                {numberOfProducts > 0 && currentProducts.map((product, index) => <Link key={`link_${index}`} to="/"><ProductCard key={index} data={product} /></Link>)}
                {numberOfProducts === 0 && <p className={styles.priceErrorText}>No products were found matching your selection.</p>}
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