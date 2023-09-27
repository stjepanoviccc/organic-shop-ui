import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AutomaticScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return null;
};

export default AutomaticScrollToTop;