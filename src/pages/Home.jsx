import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import TrainingSection from '../components/home/TrainingSection';
import StatsSection from '../components/home/StatsSection';
import ContactSection from '../components/home/ContactSection';
import ClientsSection from '../components/home/ClientsSection';
import Footer from '../components/home/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <TrainingSection />
            <StatsSection />
            <ClientsSection />
            <ContactSection />
            <Footer />
        </div>
    );
}