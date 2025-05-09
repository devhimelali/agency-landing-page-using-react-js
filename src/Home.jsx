import cta from "./data/cta";
import faq from "./data/faq";
import planInfo from "./data/plan";
import testimonialInfo from "./data/testimonial"
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Services from "./components/Services";
import ServiceTwo from "./components/ServiceTwo";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/pricing/Pricing";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/faq/FAQ";

export default function Home() {
    return (
        <>
            <Hero/>
            <Brands/>
            <Services/>
            <ServiceTwo/>
            <Testimonial {...testimonialInfo}/>
            <Pricing {...planInfo}/>
            <FAQ {...faq}/>
            <CallToAction {...cta}/>
        </>
    )
}