import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useProductsData, useProductsMap } from "../../context/FetchDataContext";
import RelatedProducts from "./Related";
import SubmenuContainer from './Submenu';
import styles from './Product.module.scss';

const ProductContainer = () => {
    const allProducts = useProductsData();
    const productQuery = useParams().productId;
    const productsMap = useProductsMap();
    const [productData, setProductData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = () => {
            if (productsMap.size > 0) {
                const fetchedProduct = productsMap.get(productQuery);
                setProductData(fetchedProduct);
                setIsLoading(false);
            }
        };
        fetchProduct();
    }, [productsMap, productQuery]);

    if (isLoading) {
        return <p className={styles.mainLoadingScreen}>Loading...</p>
    }

    return (
        <section className={styles.productSection}>
            <div className={styles.mainWrap}>
                <div className={styles.productWrap}>
                    <div className={styles.productImageWrap}>
                        <img className={styles.productImage} src={imgPathHandler(productData[1].image)} alt={productData[1].query}></img>
                    </div>
                    <div className={styles.productDataWrap}>
                        <h2 className={styles.productTitle}>{productData[1].title}</h2>
                        <p><span className={styles.productPrice}>{productData[1].price.toFixed(2)}$</span> + Free Shipping</p>
                        <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</p>
                        <div className={styles.addToCartHolder}>
                            <input className={styles.valueInput} defaultValue="1" type="number"></input>
                            <button className={styles.addToCartButton}>ADD TO CART</button>
                        </div>
                        <p className={styles.productCategories}>Categories:
                            {productData[1].category.split(',').map((category, index) => (
                                <Link className={styles.categoryLink} key={index} to={`/product-category/${category.toLowerCase()}`}>{category}</Link>
                            ))}
                        </p>
                    </div>
                </div>
                <SubmenuContainer data={productData[1]} />
                <RelatedProducts relatedProducts={allProducts.filter((product) => product.title !== productData[1].title && product.category === productData[1].category).slice(0, 4)} />
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
