import React, { useState, useEffect, useContext } from 'react';

export const FetchContext = React.createContext();

const FetchDataProvider = (props) => {
    const [customersData, setCustomersData] = useState([]);
    const [sliderData, setSliderData] = useState([]);
    const [brandsData, setBrandsData] = useState([]);
    const [freshProductsData, setFreshProductsData] = useState([]);
    const [certifiedProductsData, setCertifiedProductsData] = useState([]);
    const [accordionsData, setAccordionsData] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [productsMap, setProductsMap] = useState(new Map());
    const [usersData, setUsersData] = useState([]);
    const [usersMap, setUsersMap] = useState(new Map());
    const [usersEmailMap, setUsersEmailMap] = useState(new Map());

    const fetchData = async () => {
        const response = await fetch("https://react-organic-shop-5b019-default-rtdb.firebaseio.com/.json");
        const data = await response.json();
        const loadedCustomersData = [];
        const loadedSliderData = [];
        const loadedBrandsData = [];
        const loadedFreshProductsData = [];
        const loadedCertifiedProductsData = [];
        const loadedAccordionsData = [];
        const loadedProductsData = [];
        const loadedUsersData = [];

        for (let key in data.customers) {
            loadedCustomersData.push({
                id: key,
                name: data.customers[key].name,
                image: loadImageFromFirebase(data.customers[key].image),
                info: data.customers[key].info,
                stars: data.customers[key].stars,
            });
        }
        setCustomersData(loadedCustomersData);

        for (let key in data.slider) {
            loadedSliderData.push({
                image: loadImageFromFirebase(data.slider[key].image)
            })
        }
        setSliderData(loadedSliderData);

        for (let key in data.brands) {
            loadedBrandsData.push({
                image: loadImageFromFirebase(data.brands[key].image)
            })
        }
        setBrandsData(loadedBrandsData);

        for (let key in data.freshProducts) {
            loadedFreshProductsData.push({
                image: loadImageFromFirebase(data.freshProducts[key].image),
                title: data.freshProducts[key].title,
                text: data.freshProducts[key].text
            })
        }
        setFreshProductsData(loadedFreshProductsData);

        for (let key in data.certifiedProducts) {
            loadedCertifiedProductsData.push({
                image: loadImageFromFirebase(data.certifiedProducts[key].image),
                title: data.certifiedProducts[key].title,
                text: data.certifiedProducts[key].text
            })
        }
        setCertifiedProductsData(loadedCertifiedProductsData);

        for (let key in data.accordions) {
            loadedAccordionsData.push({
                title: data.accordions[key].title,
                text: data.accordions[key].text
            })
        }
        setAccordionsData(loadedAccordionsData);

        for (let key in data.products) {
            loadedProductsData.push({
                id: key,
                title: data.products[key].title,
                image: loadImageFromFirebase(data.products[key].image),
                discount: data.products[key].discount,
                price: data.products[key].price,
                category: data.products[key].category,
                query: data.products[key].query,
                description: data.products[key].description,
                reviews: data.products[key].reviews === undefined ? {} : data.products[key].reviews
            });
            productsMap.set(`${data.products[key].query}`, [key, data.products[key]]);

        }
        setProductsData(loadedProductsData);
        setProductsMap(new Map(productsMap));

        for (let key in data.users) {
            loadedUsersData.push({
                id: key,
                username: data.users[key].username,
                password: data.users[key].password,
                email: data.users[key].email,
                image: data.users[key].image,
                payment: data.users[key].payment || null
            });
            usersMap.set(`${data.users[key].username}`, [data.users[key].password, data.users[key].email, loadImageFromFirebase(data.users[key].image), data.users[key].username, data.users[key].payment, key]);
            usersEmailMap.set(`${data.users[key].email}`, true);
        };
        setUsersData(loadedUsersData);
        setUsersMap(new Map(usersMap));
        setUsersEmailMap(new Map(usersEmailMap));
    };

    const addNewUser = (user) => {
        setUsersData(prev => [
            ...prev, user
        ]);
        const { username, password, email, image, id } = user;
        usersMap.set(username, [password, email, loadImageFromFirebase(image), username, id]);
        usersEmailMap.set(email, true);
    };

    const addNewReview = (productId, newReview) => {
        const updatedProducts = productsData.map(product => {
            if (product.id === productId) {
                const uniqueId = `${Date.now()}-${Math.random().toString(36).substring(7)}`;
                product.reviews[uniqueId] = newReview;
            }
            return product;
        });
        setProductsData(updatedProducts);
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    return (
        <FetchContext.Provider
            value={{
                customersData,
                sliderData,
                brandsData,
                freshProductsData,
                certifiedProductsData,
                accordionsData,
                productsData,
                productsMap,
                usersData,
                usersMap,
                usersEmailMap,
                addNewUser,
                addNewReview,
                fetchData
            }}>
            {props.children}
        </FetchContext.Provider>
    );
};

export const useCustomersData = () => {
    return useContext(FetchContext).customersData;
}

export const useSliderData = () => {
    return useContext(FetchContext).sliderData;
}

export const useBrandsData = () => {
    return useContext(FetchContext).brandsData;
}

export const useFreshProductsData = () => {
    return useContext(FetchContext).freshProductsData;
}

export const useCertifiedProductsData = () => {
    return useContext(FetchContext).certifiedProductsData;
}

export const useAccordionsData = () => {
    return useContext(FetchContext).accordionsData;
};

export const useProductsData = () => {
    return useContext(FetchContext).productsData;
};

export const useProductsMap = () => {
    return useContext(FetchContext).productsMap;
}

export const useUsersData = () => {
    return useContext(FetchContext).usersData;
};

export const useUsersMap = () => {
    return useContext(FetchContext).usersMap;
}

export const useUsersEmailMap = () => {
    return useContext(FetchContext).usersEmailMap;
}

export const useAddNewUser = () => {
    return useContext(FetchContext).addNewUser;
}

export const useAddNewReview = () => {
    return useContext(FetchContext).addNewReview;
}

export default FetchDataProvider;

// loading images
const loadImageFromFirebase = (url) => {
    const isLocalhost = window.location.href.includes('localhost');
    const modifiedUrl = isLocalhost ? `${process.env.PUBLIC_URL}/static/images/${url}` : `./static/images/${url}`
    return modifiedUrl;
};