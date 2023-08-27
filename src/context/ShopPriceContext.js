import React, { useState, useContext } from "react";
import { useProductsData } from "./FetchDataContext";

const ShopPriceUpdateContext = React.createContext();
const ShopPriceContext = React.createContext({
    GLOBAL_MIN: 0,
    GLOBAL_MAX: 0,
    currentMin: 0,
    currentMax: 0
});

const ShopPriceProvider = (props) => {
    const products = useProductsData();
    const initialMinMax = products.reduce(
        (acc, product) => {
            let price = Number(product.price);
            return {
                min: Math.min(acc.min, price),
                max: Math.max(acc.max, price)
            };
        },
        { min: 999, max: -999 }
    );

    const [currentMin, setCurrentMin] = useState(initialMinMax.min);
    const [currentMax, setCurrentMax] = useState(initialMinMax.max);

    const updateCurrentPriceRange = (newCurrentMin, newCurrentMax) => {
        setCurrentMin(newCurrentMin);
        setCurrentMax(newCurrentMax);
    }

    return (
        <ShopPriceContext.Provider value={{
            GLOBAL_MIN: initialMinMax.min,
            GLOBAL_MAX: initialMinMax.max,
            currentMin: currentMin < currentMax ? currentMin : initialMinMax.min,
            currentMax: currentMax > currentMin ? currentMax : initialMinMax.max
        }}>
            <ShopPriceUpdateContext.Provider value={updateCurrentPriceRange}>
                {props.children}
            </ShopPriceUpdateContext.Provider>
        </ShopPriceContext.Provider>
    )
};

export const usePricesData = () => {
    return useContext(ShopPriceContext);
}

export const usePricesDataUpdate = () => {
    return useContext(ShopPriceUpdateContext);
}

export default ShopPriceProvider;