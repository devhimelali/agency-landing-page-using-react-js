import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Services from "./components/Services";
import ServiceTwo from "./components/ServiceTwo";
import testimonialInfo from "./data/testimonial"
import Testimonial from "./components/Testimonial";

export default function Home() {
    return (
        <>
            <Hero/>
            <Brands/>
            <Services/>
            <ServiceTwo/>
            <Testimonial {...testimonialInfo}/>
        </>
    )
}