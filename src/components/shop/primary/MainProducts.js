import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProductsData } from '../../../context/FetchDataContext';
import Pagination from './Pagination';
import SortDropdown from './SortDropdown';
import ProductCard from '../../UI/cards/ProductCard';
import styles from './MainProducts.module.scss';

const MainProductsContainer = ({ category }) => {
    const productsData = useProductsData();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;
    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const filteredProducts = productsData.filter(product => product.category.toUpperCase() === category);
    const numberOfProducts = category === 'ALL' ? productsData.length : filteredProducts.length;
    const currentProducts = category === 'ALL' ? productsData.slice(indexOfFirst, indexOfLast) : filteredProducts.slice(indexOfFirst, indexOfLast);

    useEffect(() => {
        setCurrentPage(1);
    }, [category])

    return (
        <>
            <div className={styles.sortWrap}>
                <p>Showing {indexOfFirst + 1}-{indexOfLast > numberOfProducts ? numberOfProducts : indexOfLast} of {numberOfProducts} results</p>
                <SortDropdown />
            </div>
            <div className={styles.mainProductsWrap}>
                {currentProducts.map((product, index) => (
                    <Link key={`link_${index}`} to="/"> <ProductCard key={index} data={product} /> </Link>
                ))}
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