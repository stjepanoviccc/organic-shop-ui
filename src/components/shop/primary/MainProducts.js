import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProductsData } from '../../../context/FetchDataContext';
import Pagination from './Pagination';
import SortDropdown from './primary-ui/SortDropdown';
import ProductCard from '../../UI/cards/ProductCard';
import styles from './MainProducts.module.scss';

const MainProductsContainer = () => {
    const productsData = useProductsData();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;
    const numberOfProducts = productsData.length;
    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = productsData.slice(indexOfFirst, indexOfLast);

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
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    numberOfProducts={numberOfProducts}
                    productsPerPage={productsPerPage}
                />
            </div>
        </>

    )
};

export default MainProductsContainer;