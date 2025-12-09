import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative bg-[#0a0a0a] overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #c9a962 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Content */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center px-6"
            >
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full bg-[#0a0a0a] border-2 border-[#c9a962] flex items-center justify-center p-6">
                        <img 
                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69375131aa471603bad8cbcd/160e9a8f1_logo_hs_final_1.png" 
                            alt="HS Consultoria" 
                            className="w-full h-full object-contain"
                        />
                    </div>
                </motion.div>

                {/* Title */}
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                >
                    Excelência em <span className="text-[#c9a962]">Gestão Empresarial</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    Soluções estratégicas em gestão de estoque, financeiro e processos para restaurantes e varejo
                </motion.p>

                {/* Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button 
                        onClick={() => scrollToSection('contato')}
                        className="bg-[#c9a962] hover:bg-[#b8984f] text-black font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
                    >
                        Fale Conosco
                    </Button>
                    <Button 
                        onClick={() => scrollToSection('servicos')}
                        variant="outline"
                        className="border-[#c9a962] text-[#c9a962] hover:bg-[#c9a962]/10 font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
                    >
                        Nossos Serviços
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="cursor-pointer"
                    onClick={() => scrollToSection('servicos')}
                >
                    <div className="w-10 h-10 rounded-full border border-[#c9a962]/50 flex items-center justify-center">
                        <ChevronDown className="w-5 h-5 text-[#c9a962]" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}