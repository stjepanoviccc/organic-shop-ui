import Hero from "../components/home/hero/Hero";
import ServicesContainer from "../components/home/services/Services";
import BestSellingContainer from "../components/home/products/best_selling/BestSelling";
import FreshContainer from "../components/home/fresh/FreshContainer";

const HomePage = () => {
    return (
        <>
            <Hero />
            <ServicesContainer />
            <BestSellingContainer />
            <FreshContainer />
        </>
    )
}

export default HomePage;