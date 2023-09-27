import store from '../store/index';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import NavMenuProvider from '../context/NavMenuContext';
import FetchDataProvider from '../context/FetchDataContext';
import NavigationMenu from "../components/navigation/NavigationMenu";
import Footer from '../components/footer/Footer';
import AutomaticScrollToTop from '../components/UI/ScrollToTop/Automatic';

const RootLayout = () => {

    return (
        <Provider store={store}>
            <FetchDataProvider>
                <NavMenuProvider>
                    <NavigationMenu />
                    <main>
                        <Outlet />
                    </main>
                    <Footer />
                    <AutomaticScrollToTop />
                </NavMenuProvider>
            </FetchDataProvider>
        </Provider>
    )
};

export default RootLayout;