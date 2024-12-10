import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">Entre em Contato</h2>
            <p className="text-gray-600 mb-8">
              Estamos prontos para transformar seu projeto em realidade. Entre em contato 
              conosco para um orçamento personalizado.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Telefone</h3>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">contato@arthousemarmoraria.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Endereço</h3>
                  <p className="text-gray-600">Rua Exemplo, 123 - São Paulo, SP</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Horário de Funcionamento</h3>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-600">Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}