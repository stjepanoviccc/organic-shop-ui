import { createHashRouter, RouterProvider } from "react-router-dom";
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProfilePage from './pages/Profile';
import ErrorPage from './pages/Error';

const router = createHashRouter([{
  path: '/',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    { index: true, element: <HomePage /> },
    { path: 'shop', element: <ShopPage category="ALL" /> },
    { path: 'groceries', element: <ShopPage category="GROCERIES" />},
    { path: 'juice', element: <ShopPage category="JUICE" />},
    { path: 'about', element: <AboutPage /> },
    { path: 'contact', element: <ContactPage /> },
    { path: 'profile', element: <ProfilePage /> },
  ],
}])

const App = () => {

  return (
    <RouterProvider router={router} />
  );
};

export default App;