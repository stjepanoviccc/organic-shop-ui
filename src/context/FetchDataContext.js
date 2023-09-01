import React, { useState, useEffect, useContext } from 'react';

export const FetchContext = React.createContext({
    customersData: [],
    brandsData: [],
    sliderData: [],
    productsData: [],
    productsMap: new Map(),
    freshProductsData: [],
    certifiedProductsData: [],
    accordionsData: [],
    fetchData: () => { },
});

const FetchDataProvider = (props) => {
    const [customersData, setCustomersData] = useState([]);
    const [sliderData, setSliderData] = useState([]);
    const [brandsData, setBrandsData] = useState([]);
    const [freshProductsData, setFreshProductsData] = useState([]);
    const [certifiedProductsData, setCertifiedProductsData] = useState([]);
    const [accordionsData, setAccordionsData] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [productsMap, setProductsMap] = useState(new Map());

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
               description: data.products[key].description
           }); 
           productsMap.set(`${data.products[key].query}`, [key, data.products[key]]);
           
       }
       setProductsData(loadedProductsData);
       setProductsMap(new Map(productsMap));
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    return (
        <FetchContext.Provider
            value={{
                customersData: customersData,
                sliderData: sliderData,
                brandsData: brandsData,
                freshProductsData: freshProductsData,
                certifiedProductsData: certifiedProductsData,
                accordionsData: accordionsData,
                productsData: productsData,
                productsMap: productsMap,
                fetchData: fetchData,
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

// helping functions when i can't use custom hooks for url
export const copiedImagePathHandler = (baseUrl) => {
    const fileId = baseUrl.match(/\/file\/d\/([^/]+)/)[1];
    const newUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
    return newUrl;
};

export default FetchDataProvider;