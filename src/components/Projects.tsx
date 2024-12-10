import React from 'react';

const projects = [
  {
    title: 'Residência Moderna',
    category: 'Bancadas',
    image: 'https://images.unsplash.com/photo-1600607687101-9f2b182d9206?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Hotel Luxo',
    category: 'Revestimentos',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Casa Contemporânea',
    category: 'Escadas',
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Apartamento Premium',
    category: 'Bancadas',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nossos Projetos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos mais recentes e deixe-se inspirar 
            pela beleza e sofisticação das pedras naturais
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-300">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}