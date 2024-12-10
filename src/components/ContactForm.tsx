import React from 'react';

export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nome</label>
        <input 
          type="text" 
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring focus:ring-blue-200" 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input 
          type="email" 
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring focus:ring-blue-200" 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Mensagem</label>
        <textarea 
          rows={4} 
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring focus:ring-blue-200"
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
      >
        Enviar Mensagem
      </button>
    </form>
  );
}