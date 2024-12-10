import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold mb-4">Informações de Contato</h3>
      
      <div className="flex items-center space-x-4">
        <Phone className="text-blue-900" />
        <span>(11) 99999-9999</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <Mail className="text-blue-900" />
        <span>contato@arthousemarmoraria.com</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <MapPin className="text-blue-900" />
        <span>Rua Exemplo, 123 - São Paulo, SP</span>
      </div>
    </div>
  );
}