import { Outlet } from 'react-router-dom';
import NavMenuProvider from '../context/NavMenuContext';
import CartProvider from '../context/CartContext';
import NavigationMenu from "../components/navigation/NavigationMenu";

const RootLayout = () => {

    return (
        <NavMenuProvider>
            <CartProvider>
                <NavigationMenu />
                <main>
                    <Outlet />
                </main>
            </CartProvider>
        </NavMenuProvider>
    )
};

export default RootLayout;