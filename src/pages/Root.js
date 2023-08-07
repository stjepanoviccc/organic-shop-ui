import { Outlet } from 'react-router-dom';
import NavigationMenu from "../components/NavigationMenu";

const RootLayout = () => {
    <>
        <NavigationMenu />
        <main>
            <Outlet />
        </main>
    </>
};

export default RootLayout;