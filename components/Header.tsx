'use client';

import { Bell, CircleHelp, Search } from 'lucide-react';

interface UsuarioLogado {
  nome: string;
  cargo: string;
  fotoUrl: string;
}


export default function Header() {
  const usuarioAtual: UsuarioLogado = {
    nome: "Paulo",
    cargo: "ADMINISTRADOR",
    fotoUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHt9uNB322SgQ/profile-displayphoto-scale_200_200/B4DZ2E1tISJoAY-/0/1776050167095?e=2147483647&v=beta&t=ky7S1gyN4BGHQA4RYLgN_mfrn7d0u-8zaq16nYnGvQo"
  };

  const estilos = {
    cabecalho: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      borderBottom: '1px solid #e0e0e0',
      fontFamily: 'sans-serif'
    },
    buscaCaixa: { 
      flex: 1,
      position: 'relative' as const,
      display: 'flex',
      alignItems: 'center'
    },
    iconeLupa: {
      position: 'absolute' as const,
      left: '12px'
    },
    buscaInput: {
      width: '100%',
      maxWidth: '450px',
      padding: '10px 10px 10px 40px',
      borderRadius: '20px',
      border: '1px solid #ccc',
      backgroundColor: '#f8f9fa',
      outline: 'none'
    },
    perfilCaixa: { display: 'flex', alignItems: 'center', gap: '20px' },
    foto: { width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' as const }
  };

  return (
    <header style={estilos.cabecalho}>
      <div style={estilos.buscaCaixa}>
        <Search color="#888" size={18} style={estilos.iconeLupa} />
        <input 
          type="text" 
          placeholder="Pesquisar tarefas, equipes ou projetos..." 
          style={estilos.buscaInput}
        />
      </div>

      <div style={estilos.perfilCaixa}>
        <Bell color="#666" size={22} style={{ cursor: 'pointer' }} />
        <CircleHelp color="#666" size={22} style={{ cursor: 'pointer' }} />
        <div style={{ width: '1px', height: '30px', backgroundColor: '#e0e0e0' }}></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={usuarioAtual.fotoUrl} alt={usuarioAtual.nome} style={estilos.foto} />
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#333' }}>{usuarioAtual.nome}</div>
            <div style={{ fontSize: '11px', color: '#888', letterSpacing: '0.5px' }}>{usuarioAtual.cargo}</div>
          </div>
        </div>
      </div>
    </header>
  )
}