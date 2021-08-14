import React from 'react'
import AboutSection from '../components/AboutSection'
import BlogSection from '../components/BlogSection'
import ContactBanner from '../components/ContactBanner'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import ProjectSection from '../components/ProjectSection'
import ServiceSection from '../components/ServiceSection'

const Home = () => {
    return (
        <div>

            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <ProjectSection />
            <BlogSection />
            <ContactBanner />
            <Footer />

        </div>
    )
}

export default Home
