import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, setCurrentPage, numberOfProducts, productsPerPage }) => {
    const pages = [];
    const numberOfPages = Math.ceil(numberOfProducts / productsPerPage);
    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
    }

    const prevPage = () => {
        setCurrentPage(Math.max(currentPage - 1, 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const nextPage = () => {
        setCurrentPage(Math.min(currentPage + 1, numberOfPages))
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const specificPage = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={styles.paginationWrap}>
            {currentPage > 1 && <button onClick={() => prevPage()} className={styles.buttonPagination}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>}

            {pages.map((page, index) => (
                <button key={index} onClick={() => specificPage(page)} className={`${styles.buttonPagination} ${page === currentPage ? styles.buttonPaginationActive : ''}`}>
                    {page}
                </button>
            ))}

            {currentPage < numberOfPages && <button onClick={() => nextPage()} className={styles.buttonPagination}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>}
        </div >
    );
};

export default Pagination;