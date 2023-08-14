import Hero from "../components/home/hero/Hero";
import ServicesContainer from "../components/home/services/Services";
import ProductsSortContainer from "../components/home/products/ProductsSort";
import FreshContainer from "../components/home/fresh/FreshContainer";

const HomePage = () => {
    return (
        <>
            <Hero />
            <ServicesContainer />
            <ProductsSortContainer type="bestSelling" />
            <FreshContainer />
            <ProductsSortContainer type="trending" />
        </>
    )
}

export default HomePage;