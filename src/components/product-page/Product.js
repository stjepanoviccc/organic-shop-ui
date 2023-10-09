import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useProductsData, useProductsMap } from "../../context/FetchDataContext";
import RelatedProducts from "./Related";
import SubmenuContainer from './Submenu';
import styles from './Product.module.scss';

const ProductContainer = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const dispatch = useDispatch();
    const allProducts = useProductsData();
    const productQuery = useParams().productId;
    const productsMap = useProductsMap();
    const quantityRef = useRef();
    const [productData, setProductData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const username = localStorage.getItem('loggedName');
    const [itemExist, setItemExistInCurrentCart] = useState(false);
    let renderCounter = 0;

    const addToCartHandler = async () => {
        const response = await fetch(`https://react-organic-shop-5b019-default-rtdb.firebaseio.com/users/${username}/currentState/currentCart.json`);
        let currentCart;
        if (username.length > 0) {
            currentCart = await response.json();
        }

        dispatch(cartActions.addToCart({
            id: productData[0],
            title: productData[1].title,
            price: productData[1].price,
            quantity: parseInt(quantityRef.current.value),
            image: handleImage(productData[1].image)
        }));

        if (username.length > 0) {
            try {
                const itemIdToIncrement = productData[0];
                if (currentCart !== null) {
                    currentCart.items.forEach((item, index) => {
                        if (item.id === itemIdToIncrement) {
                            item.quantity = parseInt(item.quantity) + parseInt(quantityRef.current.value);
                            currentCart.totalAmount += parseInt(quantityRef.current.value) * parseInt(item.price);
                        }
                        setItemExistInCurrentCart(true);
                    })
                }

                if (itemExist) {
                    await fetch(`https://react-organic-shop-5b019-default-rtdb.firebaseio.com/users/${username}/currentState.json`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ currentCart }),
                    });
                }
                else {
                    //  if it isn't fetched (doesnt exist) then this is first item, create currentCart as this item only and send to firebase.
                    if (currentCart === null || currentCart === undefined) {
                        currentCart = {
                            items: [{
                                id: productData[0],
                                title: productData[1].title,
                                price: productData[1].price,
                                quantity: parseInt(quantityRef.current.value)
                            }],
                            totalAmount: productData[1].price * parseInt(quantityRef.current.value),
                            totalQuantity: 1
                        }
                        await fetch(`https://react-organic-shop-5b019-default-rtdb.firebaseio.com/users/${username}/currentState.json`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ currentCart }),
                        });
                    }
                }
            } catch (error) {
                console.error('Fetch Error:', error);
            }
        }
        renderCounter += 1;
    };

    useEffect(() => {
        // render
    }, [isAuth])

    useEffect(() => {
        const fetchProduct = () => {
            if (productsMap.size > 0) {
                const fetchedProduct = productsMap.get(productQuery);
                setProductData(fetchedProduct);
                setIsLoading(false);
            }
        };
        fetchProduct();
    }, [productsMap, productQuery, renderCounter]);

    if (isLoading) {
        return <p className={styles.mainLoadingScreen}>Loading...</p>
    }

    return (
        <section className={styles.productSection} key={productQuery}>
            <div className={styles.mainWrap}>
                <div className={styles.productWrap}>
                    <div className={styles.productImageWrap}>
                        <img className={styles.productImage} src={handleImage(productData[1].image)} alt={productData[1].query}></img>
                    </div>
                    <div className={styles.productDataWrap}>
                        <h2 className={styles.productTitle}>{productData[1].title}</h2>
                        <p><span className={styles.productPrice}>{productData[1].price.toFixed(2)}$</span> + Free Shipping</p>
                        <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</p>
                        <div className={styles.addToCartHolder}>
                            <input ref={quantityRef} className={styles.valueInput} defaultValue="1" min="1" type="number"></input>
                            <button className={styles.addToCartButton} onClick={addToCartHandler}>ADD TO CART</button>
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

// handle image from firebase
const handleImage = (url) => {
    const isLocalhost = window.location.href.includes('localhost');
    const modifiedUrl = isLocalhost ? `${process.env.PUBLIC_URL}/static/images/${url}` : `./static/images/${url}`
    return modifiedUrl;
};