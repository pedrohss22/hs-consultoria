import React from 'react';
import { motion } from 'framer-motion';

const clients = [
    {
        name: "Bendito Espresso",
        logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69375131aa471603bad8cbcd/e29aeb6bd_images.jpg"
    },
    {
        name: "Levissimo",
        logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69375131aa471603bad8cbcd/9966f6463_levissimo.jpg"
    },
    {
        name: "Sukasa Sushi",
        logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69375131aa471603bad8cbcd/995e74103_sukasa.jpg"
    },
    {
        name: "The View",
        logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69375131aa471603bad8cbcd/aad2e8e29_theview.jpg"
    },
    {
        name: "The W Restaurante",
        logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69375131aa471603bad8cbcd/2bd22d959_thew.jpg"
    },
    {
        name: "Cannelle",
        logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69375131aa471603bad8cbcd/d06eb54d7_cannele.jpg"
    },
    {
        name: "Choperia Palmitense",
        logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69375131aa471603bad8cbcd/34015ca4f_choperiapalmitense.jpg"
    },
    {
        name: "Grãos do Brejo",
        logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69375131aa471603bad8cbcd/428fa7826_graosdobrejo.jpg"
    },
    {
        name: "LS",
        logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69375131aa471603bad8cbcd/53a3a4da2_LS.jpg"
    },
    {
        name: "Sainte Julie",
        logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69375131aa471603bad8cbcd/d8edb960d_SainteJulie.jpg"
    }
];

export default function ClientsSection() {
    return (
        <section className="py-24 bg-[#111111]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Clientes <span className="text-[#c9a962]">Atendidos</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Empresas que confiam em nossos serviços de consultoria
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group"
                        >
                            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#c9a962]/50 transition-all duration-300 hover:transform hover:-translate-y-2 flex items-center justify-center aspect-square">
                                <img 
                                    src={client.logo}
                                    alt={client.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}