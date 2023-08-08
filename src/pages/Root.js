import { Outlet } from 'react-router-dom';
import NavigationMenu from "../components/navigation/NavigationMenu";

const RootLayout = () => {
    return (
        <>
        <NavigationMenu />
        <main>
            <Outlet />
        </main>
    </>
    )
};

export default RootLayout;