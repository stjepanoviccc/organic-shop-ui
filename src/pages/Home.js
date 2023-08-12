import Hero from "../components/home/hero/Hero";
import ServicesContainer from "../components/home/services/Services";
import BestSellingContainer from "../components/home/products/best_selling/BestSelling";

const HomePage = () => {
    return (
        <>
            <Hero />
            <ServicesContainer />
            <BestSellingContainer />
        </>
    )
}

export default HomePage;