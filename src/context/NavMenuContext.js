import React, { useState, useContext } from 'react';
import BackgroundColorProvider from './NavBackgroundContext';
import ShopPriceProvider from './ShopPriceContext';
import LoginModalProvider from './LoginModalContext';
import RegisterModalProvider from './RegisterModalContext';
import SearchProvider from './SearchContext';
import CartProvider from './CartContext';

const NavMenuContext = React.createContext();
const NavMenuContextUpdate = React.createContext();

const NavMenuProvider = (props) => {
    const [isActive, setisActive] = useState(false);
    const toggleMenu = () => {
        setisActive(prevState => !prevState);
    }

    return (
        <NavMenuContext.Provider value={isActive} >
            <NavMenuContextUpdate.Provider value={toggleMenu}>
                <LoginModalProvider>
                    <RegisterModalProvider>
                        <ShopPriceProvider>
                            <SearchProvider>
                                <BackgroundColorProvider>
                                    <CartProvider>
                                        {props.children}
                                    </CartProvider>
                                </BackgroundColorProvider>
                            </SearchProvider>
                        </ShopPriceProvider>
                    </RegisterModalProvider>
                </LoginModalProvider>
            </NavMenuContextUpdate.Provider>
        </NavMenuContext.Provider>
    )
};

export const useNavMenu = () => {
    return useContext(NavMenuContext);
};

export const useNavMenuUpdate = () => {
    return useContext(NavMenuContextUpdate);
};

export default NavMenuProvider;