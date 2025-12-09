import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Briefcase } from 'lucide-react';

const achievements = [
    {
        icon: GraduationCap,
        title: "Formação em Gestão Comercial",
        description: "Base sólida em estratégias comerciais e gestão de negócios"
    },
    {
        icon: Award,
        title: "Pós-Graduação em Gestão de Serviços",
        description: "Especialização em gestão financeira e controle de estoque"
    },
    {
        icon: Code,
        title: "Pós-Graduação em Engenharia de Software",
        description: "Visão tecnológica para otimização de processos"
    },
    {
        icon: Briefcase,
        title: "10 Anos de Experiência",
        description: "Atuação em grandes restaurantes e redes de varejo"
    }
];

export default function AboutSection() {
    return (
        <section id="sobre" className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#c9a962]/20 to-transparent rounded-3xl blur-xl" />
                            <div className="relative rounded-3xl overflow-hidden border-2 border-[#c9a962]/30">
                                <img 
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68e472f864673ae13dc46542/97234104a_perfil.png"
                                    alt="Fundador HS Consultoria"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Sobre o <span className="text-[#c9a962]">Fundador</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            Com mais de 10 anos de experiência em grandes restaurantes e redes de varejo, 
                            trago uma visão única e prática para transformar a gestão do seu negócio.
                        </p>

                        <div className="grid gap-6">
                            {achievements.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-6 h-6 text-[#c9a962]" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                                        <p className="text-gray-500 text-sm">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}