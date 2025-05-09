import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Services from "./components/Services";
import ServiceTwo from "./components/ServiceTwo";
import testimonialInfo from "./data/testimonial"
import planInfo from "./data/plan";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/pricing/Pricing.jsx";

export default function Home() {
    return (
        <>
            <Hero/>
            <Brands/>
            <Services/>
            <ServiceTwo/>
            <Testimonial {...testimonialInfo}/>
            <Pricing {...planInfo}/>
        </>
    )
}