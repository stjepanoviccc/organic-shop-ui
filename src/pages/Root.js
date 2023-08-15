import { Outlet } from 'react-router-dom';
import NavMenuProvider from '../context/NavMenuContext';
import CartProvider from '../context/CartContext';
import NavigationMenu from "../components/navigation/NavigationMenu";
import Footer from '../components/footer/Footer';

const RootLayout = () => {

    return (
        <NavMenuProvider>
            <CartProvider>
                <NavigationMenu />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </CartProvider>
        </NavMenuProvider>
    )
};

export default RootLayout;