import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transformando Pedras em Arte
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200">
          Criamos ambientes únicos com a nobreza do mármore e a elegância do design
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projetos" 
            className="bg-white text-gray-900 px-8 py-4 rounded-md hover:bg-gray-100 transition"
          >
            Ver Projetos
          </a>
          <a 
            href="#contato" 
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white/10 transition"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white" size={32} />
      </div>
    </section>
  );
}