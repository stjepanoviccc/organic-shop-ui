import { Outlet } from 'react-router-dom';
import NavMenuProvider from '../context/NavMenuContext';
import BackgroundColorProvider from '../context/NavBackgroundContext';
import CartProvider from '../context/CartContext';
import NavigationMenu from "../components/navigation/NavigationMenu";
import Footer from '../components/footer/Footer';

const RootLayout = () => {

    return (
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
    )
};

export default RootLayout;