import React from 'react';
import { motion } from 'framer-motion';
import { Package, DollarSign, Utensils, Settings, Target, GraduationCap } from 'lucide-react';

const services = [
    {
        icon: Package,
        title: "Gestão de Estoque",
        description: "Otimização completa do controle de estoque com redução de perdas e maximização de resultados"
    },
    {
        icon: DollarSign,
        title: "Gestão Financeira",
        description: "Planejamento e controle financeiro estratégico para crescimento sustentável do seu negócio"
    },
    {
        icon: Utensils,
        title: "Soluções Food Service",
        description: "Processos práticos e eficientes para o dia a dia de restaurantes e serviços alimentícios"
    },
    {
        icon: Settings,
        title: "Processos Gerenciais",
        description: "Implementação de processos que aumentam produtividade e reduzem custos operacionais"
    },
    {
        icon: Target,
        title: "Consultoria Estratégica",
        description: "Análise profunda do negócio com soluções customizadas para seus desafios específicos"
    },
    {
        icon: GraduationCap,
        title: "Treinamento & Capacitação",
        description: "Programas de treinamento personalizados para desenvolver competências e elevar a performance da equipe"
    }
];

export default function ServicesSection() {
    return (
        <section id="servicos" className="py-24 bg-[#111111]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Nossos <span className="text-[#c9a962]">Serviços</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Soluções personalizadas para elevar a gestão do seu negócio
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 h-full hover:border-[#c9a962]/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                                <div className="w-16 h-16 rounded-xl bg-[#c9a962]/10 flex items-center justify-center mb-6 group-hover:bg-[#c9a962]/20 transition-colors">
                                    <service.icon className="w-8 h-8 text-[#c9a962]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}