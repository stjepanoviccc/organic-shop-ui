import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, setCurrentPage, totalProducts, productsPerPage }) => {
    const pages = [];
    const numberOfPages = Math.ceil(totalProducts / productsPerPage);
    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.paginationWrap}>
            {currentPage === numberOfPages && <button onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))} className={styles.buttonPagination}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button> }

            {pages.map((page, index) => (
                <button key={index} onClick={() => setCurrentPage(page)} className={`${styles.buttonPagination} ${page === currentPage ? styles.buttonPaginationActive : ''}`}>
                    {page}
                </button>
            ))}

            {currentPage < numberOfPages && <button onClick={() => setCurrentPage(Math.min(currentPage + 1, numberOfPages))} className={styles.buttonPagination}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button> }
        </div >
    );
};

export default Pagination;