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
                image: data.customers[key].image,
                info: data.customers[key].info,
                stars: data.customers[key].stars,
            });
        }
        setCustomersData(loadedCustomersData);

        for (let key in data.slider) {
            loadedSliderData.push({
                image: data.slider[key].image
            })
        }
        setSliderData(loadedSliderData);

        for (let key in data.brands) {
            loadedBrandsData.push({
                image: data.brands[key].image
            })
        }
        setBrandsData(loadedBrandsData);

        for (let key in data.freshProducts) {
            loadedFreshProductsData.push({
                image: data.freshProducts[key].image,
                title: data.freshProducts[key].title,
                text: data.freshProducts[key].text
            })
        }
        setFreshProductsData(loadedFreshProductsData);

        for (let key in data.certifiedProducts) {
            loadedCertifiedProductsData.push({
                image: data.certifiedProducts[key].image,
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
                image: data.products[key].image,
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

        for(let key in data.users) {
            loadedUsersData.push({
                id: key,
                username: data.users[key].username,
                password: data.users[key].password,
                email: data.users[key].email
            });
            usersMap.set(`${data.users[key].username}`, data.users[key].password);
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
        usersMap.set(user.username, user.password);
        usersEmailMap.set(user.email, true);
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

// helping functions when i can't use custom hooks for url
export const copiedImagePathHandler = (baseUrl) => {
    const fileId = baseUrl.match(/\/file\/d\/([^/]+)/)[1];
    const newUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
    return newUrl;
};

export default FetchDataProvider;