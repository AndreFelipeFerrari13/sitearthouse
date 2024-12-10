import React from 'react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Excelência em Marmoraria</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Com mais de 20 anos de experiência, a Art House Marmoraria é referência em 
              trabalhos sob medida em mármore, granito e outras pedras nobres. Nossa equipe 
              de profissionais altamente qualificados transforma suas ideias em realidade.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">20+</h3>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-600">Projetos Realizados</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">100%</h3>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Marble craftsmanship" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Marble detail" 
              className="rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}