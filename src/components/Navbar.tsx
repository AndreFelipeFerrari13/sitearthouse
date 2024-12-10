import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-800 hover:text-gray-600 transition">Início</a>
            <a href="#sobre" className="text-gray-800 hover:text-gray-600 transition">Sobre</a>
            <a href="#projetos" className="text-gray-800 hover:text-gray-600 transition">Projetos</a>
            <a href="#servicos" className="text-gray-800 hover:text-gray-600 transition">Serviços</a>
            <a href="#contato" className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">Contato</a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#inicio" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">Início</a>
            <a href="#sobre" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">Sobre</a>
            <a href="#projetos" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">Projetos</a>
            <a href="#servicos" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">Serviços</a>
            <a href="#contato" className="block px-3 py-2 bg-gray-900 text-white rounded-md">Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
}