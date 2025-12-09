import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        value: "contato@hsconsultoria.com"
    },
    {
        icon: Phone,
        title: "Telefone",
        value: "(83) 99909-4450"
    },
    {
        icon: MapPin,
        title: "Localização",
        value: "Atendimento em todo Brasil"
    }
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simula envio
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <section id="contato" className="py-24 bg-[#111111]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Entre em <span className="text-[#c9a962]">Contato</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Vamos conversar sobre como podemos transformar a gestão do seu negócio
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Input
                                    placeholder="Nome"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                    className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-gray-500 h-14 rounded-xl focus:border-[#c9a962] focus:ring-[#c9a962]"
                                />
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    required
                                    className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-gray-500 h-14 rounded-xl focus:border-[#c9a962] focus:ring-[#c9a962]"
                                />
                            </div>
                            <div>
                                <Input
                                    placeholder="Telefone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-gray-500 h-14 rounded-xl focus:border-[#c9a962] focus:ring-[#c9a962]"
                                />
                            </div>
                            <div>
                                <Textarea
                                    placeholder="Mensagem"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    required
                                    rows={5}
                                    className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-gray-500 rounded-xl focus:border-[#c9a962] focus:ring-[#c9a962] resize-none"
                                />
                            </div>
                            <Button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#c9a962] hover:bg-[#b8984f] text-black font-semibold h-14 rounded-xl text-lg transition-all duration-300"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 mr-2" />
                                        Enviar Mensagem
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {contactInfo.map((info, index) => (
                            <div key={index} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#c9a962]/50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-[#c9a962]/10 flex items-center justify-center">
                                        <info.icon className="w-6 h-6 text-[#c9a962]" />
                                    </div>
                                    <div>
                                        <h3 className="text-[#c9a962] font-semibold mb-1">{info.title}</h3>
                                        <p className="text-white">{info.value}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}