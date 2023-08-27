import { Outlet } from 'react-router-dom';
import NavMenuProvider from '../context/NavMenuContext';
import BackgroundColorProvider from '../context/NavBackgroundContext';
import FetchDataProvider from '../context/FetchDataContext';
import ShopPriceProvider from '../context/ShopPriceContext';
import SearchProvider from '../context/SearchContext';
import CartProvider from '../context/CartContext';
import NavigationMenu from "../components/navigation/NavigationMenu";
import Footer from '../components/footer/Footer';

const RootLayout = () => {

    return (
        <FetchDataProvider>
            <ShopPriceProvider>
                <SearchProvider>
                <NavMenuProvider>
                    <BackgroundColorProvider>
                        <CartProvider>
                            <NavigationMenu />
                            <main>
                                <Outlet />
                            </main>
                            <Footer />
                        </CartProvider>
                    </BackgroundColorProvider>
                </NavMenuProvider>
                </SearchProvider>
            </ShopPriceProvider>
        </FetchDataProvider>
    )
};

export default RootLayout;