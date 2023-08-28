import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsMap } from "../../context/FetchDataContext";
import styles from './Product.module.scss';

const ProductContainer = () => {
    const productQuery = useParams().productId;
    const productsMap = useProductsMap();
    const product = productsMap.get(productQuery);

    return (
        <section className={styles.productSection}>
            <div className={styles.mainWrap}>
                <div className={styles.productWrap}>

                </div>
            </div>
        </section>
    )
};

export default ProductContainer;

// mimic of custom hook - useImagePathHandler
const imgPathHandler = (baseUrl) => {
    const fileId = baseUrl.match(/\/file\/d\/([^/]+)/)[1];
    const newUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
    return newUrl;
};
