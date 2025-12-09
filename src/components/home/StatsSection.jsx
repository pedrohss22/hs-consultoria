import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: "10+", label: "Anos de Experiência" },
    { value: "100%", label: "Foco em Resultados" },
    { value: "360°", label: "Visão Estratégica" },
    { value: "24/7", label: "Suporte Dedicado" }
];

export default function StatsSection() {
    return (
        <section className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Por Que Escolher a <span className="text-[#c9a962]">HS Consultoria</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="relative inline-block">
                                <div className="absolute -inset-4 bg-[#c9a962]/10 rounded-full blur-xl" />
                                <span className="relative text-5xl md:text-7xl font-bold text-[#c9a962]">
                                    {stat.value}
                                </span>
                            </div>
                            <p className="text-gray-400 mt-4 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}