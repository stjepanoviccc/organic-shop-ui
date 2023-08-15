import Hero from "../components/home/hero/Hero";
import ServicesContainer from "../components/home/services/Services";
import ProductsSortContainer from "../components/home/products/ProductsSort";
import FreshContainer from "../components/home/fresh/FreshContainer";
import ReviewsContainer from "../components/home/customers/Reviews";
import BrandsContainer from "../components/home/brands/Brands";

const HomePage = () => {
    return (
        <>
            <Hero />
            <ServicesContainer />
            <ProductsSortContainer type="bestSelling" />
            <FreshContainer />
            <ProductsSortContainer type="trending" />
            <ReviewsContainer />
            <BrandsContainer />
        </>
    )
}

export default HomePage;