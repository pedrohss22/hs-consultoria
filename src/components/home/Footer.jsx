import React from 'react';

export default function Footer() {
    return (
        <footer className="py-8 bg-[#0a0a0a] border-t border-[#1a1a1a]">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} HS Consultoria Empresarial. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}