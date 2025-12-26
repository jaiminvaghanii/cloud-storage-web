import { Header } from '../components/layout/Header';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Pricing } from '../components/sections/Pricing';
import { Security } from '../components/sections/Security';
import { Testimonials } from '../components/sections/Testimonials';
import { CTA } from '../components/sections/CTA';
import { Footer } from '../components/layout/Footer';

export const LandingPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <HowItWorks />
            <Pricing />
            <Security />
            <Testimonials />
            <CTA />
            <Footer />
        </>
    );
};
