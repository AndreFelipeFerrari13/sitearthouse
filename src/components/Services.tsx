import React from 'react';
import { Ruler, Hammer, Shield } from 'lucide-react';

const services = [
  {
    icon: <Ruler className="w-12 h-12" />,
    title: 'Projetos Sob Medida',
    description: 'Desenvolvemos soluções personalizadas para cada cliente, garantindo exclusividade e perfeição em cada detalhe.'
  },
  {
    icon: <Hammer className="w-12 h-12" />,
    title: 'Instalação Profissional',
    description: 'Nossa equipe especializada garante uma instalação impecável, seguindo os mais altos padrões de qualidade.'
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Garantia de Qualidade',
    description: 'Oferecemos garantia em todos os nossos serviços e utilizamos apenas materiais de primeira linha.'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços em marmoraria, sempre com foco na 
            qualidade e satisfação dos nossos clientes
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}