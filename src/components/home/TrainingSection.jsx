import React from 'react';
import { motion } from 'framer-motion';
import { Package, DollarSign, ChefHat, Users, Building2, BookOpen, Award, HeadphonesIcon } from 'lucide-react';

const trainings = [
    {
        icon: Package,
        title: "Gestão de Estoque Avançada",
        items: [
            "Controle de perdas e desperdícios",
            "Métodos de inventário eficientes",
            "Análise de curva ABC",
            "Otimização de compras e fornecedores",
            "Uso de sistemas de gestão"
        ]
    },
    {
        icon: DollarSign,
        title: "Controle Financeiro para Restaurantes",
        items: [
            "Precificação estratégica de cardápio",
            "Controle de custos e CMV",
            "Fluxo de caixa e DRE",
            "Indicadores de performance (KPIs)",
            "Análise de rentabilidade por produto"
        ]
    },
    {
        icon: ChefHat,
        title: "Operações de Food Service",
        items: [
            "Padronização de processos",
            "Gestão de equipes de cozinha",
            "Segurança alimentar e APPCC",
            "Atendimento ao cliente",
            "Redução de tempo de preparo"
        ]
    },
    {
        icon: Users,
        title: "Liderança e Gestão de Pessoas",
        items: [
            "Desenvolvimento de lideranças",
            "Comunicação efetiva",
            "Gestão de conflitos",
            "Motivação e engajamento",
            "Cultura organizacional"
        ]
    }
];

const benefits = [
    { icon: Building2, text: "Turmas Personalizadas" },
    { icon: BookOpen, text: "Material Didático Incluso" },
    { icon: Award, text: "Certificado de Conclusão" },
    { icon: HeadphonesIcon, text: "Suporte Pós-Treinamento" }
];

export default function TrainingSection() {
    return (
        <section id="treinamentos" className="py-24 bg-[#111111]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Programas de <span className="text-[#c9a962]">Treinamento</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Capacitação especializada para transformar sua equipe em verdadeiros profissionais
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {trainings.map((training, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 h-full hover:border-[#c9a962]/50 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-[#c9a962]/10 flex items-center justify-center">
                                        <training.icon className="w-7 h-7 text-[#c9a962]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{training.title}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {training.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a962]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* In Company */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-[#c9a962]/20 to-[#c9a962]/5 border border-[#c9a962]/30 rounded-3xl p-8 md:p-12"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Treinamento In Company
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Todos os nossos treinamentos podem ser realizados diretamente na sua empresa, 
                            com conteúdo personalizado para atender as necessidades específicas do seu negócio.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className="w-14 h-14 rounded-full bg-[#c9a962]/20 flex items-center justify-center mx-auto mb-3">
                                    <benefit.icon className="w-6 h-6 text-[#c9a962]" />
                                </div>
                                <p className="text-white font-medium text-sm">{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}