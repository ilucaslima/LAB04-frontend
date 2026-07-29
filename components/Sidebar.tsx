'use client';

import React from 'react';
import { LayoutDashboard, Kanban, Users, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen shrink-0 select-none">
      {/* Logo e Nome da Empresa */}
      <div className="p-6 border-b border-gray-100">
        <h1 className="font-bold text-xl text-blue-600 tracking-tight">TaskFlow</h1>
        <span className="text-[11px] font-medium text-gray-400 tracking-wider uppercase">Enterprise Pro</span>
      </div>

      {/* Links de Navegação */}
      <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
        <a 
          href="#" 
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <LayoutDashboard size={18} />
          <span>Painel</span>
        </a>

        <a 
          href="#" 
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium bg-blue-50 text-blue-600 font-semibold"
        >
          <Kanban size={18} />
          <span>Quadro</span>
        </a>

        <a 
          href="#" 
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <Users size={18} />
          <span>Times</span>
        </a>

        <a 
          href="#" 
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <Settings size={18} />
          <span>Configurações</span>
        </a>
      </nav>
    </aside>
  );
}