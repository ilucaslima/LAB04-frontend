'use client';

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Clock, MessageSquare, Plus, X, Trash2, CheckCircle2 } from 'lucide-react';

interface Tarefa {
  id: string;
  titulo: string;
  descricao: string;
  prioridade: 'ALTA' | 'MÉDIA' | 'BAIXA';
  tagCor: string;
  data?: string;
  comentarios?: number;
}

interface Coluna {
  id: string;
  titulo: string;
  tarefas: Tarefa[];
}

export default function KanbanBoard() {
  // Agora todas as colunas começam vazias (em branco)
  const [colunas, setColunas] = useState<Record<string, Coluna>>({
    afazer: {
      id: 'afazer',
      titulo: 'A Fazer',
      tarefas: []
    },
    emandamento: {
      id: 'emandamento',
      titulo: 'Em Andamento',
      tarefas: []
    },
    emrevisao: {
      id: 'emrevisao',
      titulo: 'Em Revisão',
      tarefas: []
    },
    concluido: {
      id: 'concluido',
      titulo: 'Concluído',
      tarefas: []
    }
  });

  const [modalAberto, setModalAberto] = useState(false);
  const [colunaAtivaId, setColunaAtivaId] = useState<string>('afazer');
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novaDescricao, setNovaDescricao] = useState('');
  const [novaPrioridade, setNovaPrioridade] = useState<'ALTA' | 'MÉDIA' | 'BAIXA'>('MÉDIA');

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const colunaOrigem = colunas[source.droppableId];
    const colunaDestino = colunas[destination.droppableId];

    if (source.droppableId === destination.droppableId) {
      const novasTarefas = Array.from(colunaOrigem.tarefas);
      const [removido] = novasTarefas.splice(source.index, 1);
      novasTarefas.splice(destination.index, 0, removido);

      setColunas({
        ...colunas,
        [source.droppableId]: {
          ...colunaOrigem,
          tarefas: novasTarefas
        }
      });
    } else {
      const tarefasOrigem = Array.from(colunaOrigem.tarefas);
      const [removido] = tarefasOrigem.splice(source.index, 1);
      
      const tarefasDestino = Array.from(colunaDestino.tarefas);
      tarefasDestino.splice(destination.index, 0, removido);

      setColunas({
        ...colunas,
        [source.droppableId]: {
          ...colunaOrigem,
          tarefas: tarefasOrigem
        },
        [destination.droppableId]: {
          ...colunaDestino,
          tarefas: tarefasDestino
        }
      });
    }
  };

  const handleCriarTarefa = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoTitulo.trim()) return;

    const novaTarefaObj: Tarefa = {
      id: Date.now().toString(),
      titulo: novoTitulo,
      descricao: novaDescricao || 'Sem descrição informada.',
      prioridade: novaPrioridade,
      tagCor: 
        novaPrioridade === 'ALTA' 
          ? 'bg-red-100 text-red-600' 
          : novaPrioridade === 'MÉDIA' 
          ? 'bg-blue-100 text-blue-600' 
          : 'bg-emerald-100 text-emerald-600',
      data: 'Hoje'
    };

    const colunaAlvo = colunas[colunaAtivaId];
    const novasTarefas = [novaTarefaObj, ...colunaAlvo.tarefas];

    setColunas({
      ...colunas,
      [colunaAtivaId]: {
        ...colunaAlvo,
        tarefas: novasTarefas
      }
    });

    setNovoTitulo('');
    setNovaDescricao('');
    setModalAberto(false);
  };

  const handleExcluirTarefa = (colunaId: string, tarefaId: string) => {
    const colunaAlvo = colunas[colunaId];
    const tarefasFiltradas = colunaAlvo.tarefas.filter((t) => t.id !== tarefaId);

    setColunas({
      ...colunas,
      [colunaId]: {
        ...colunaAlvo,
        tarefas: tarefasFiltradas
      }
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-6 overflow-x-auto pb-4 items-start">
          {Object.values(colunas).map((coluna) => (
            <div 
              key={coluna.id} 
              className="w-80 bg-gray-100/80 rounded-2xl p-4 flex flex-col gap-4 shrink-0 border border-gray-200/60 shadow-sm"
            >
              <div className="flex justify-between items-center px-1">
                <div className="flex items-center gap-2">
                  {coluna.id === 'concluido' && <CheckCircle2 size={16} className="text-emerald-600" />}
                  <h3 className="font-semibold text-gray-700 text-sm">{coluna.titulo}</h3>
                  <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-0.5 rounded-full">
                    {coluna.tarefas.length}
                  </span>
                </div>
                <button 
                  onClick={() => {
                    setColunaAtivaId(coluna.id);
                    setModalAberto(true);
                  }}
                  className="text-gray-400 hover:text-indigo-600 transition-colors p-1 rounded-lg hover:bg-white"
                  title="Adicionar nova tarefa"
                >
                  <Plus size={18} />
                </button>
              </div>

              <Droppable droppableId={coluna.id}>
                {(provided, snapshot) => (
                  <div 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`flex flex-col gap-3 min-h-[200px] rounded-xl transition-colors ${
                      snapshot.isDraggingOver ? 'bg-indigo-50/50 border-2 border-dashed border-indigo-200' : ''
                    }`}
                  >
                    {coluna.tarefas.map((tarefa, index) => (
                      <Draggable key={tarefa.id} draggableId={tarefa.id} index={index}>
                        {(provided, snapshot) => (
                          <div 
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{ ...provided.draggableProps.style }}
                            className={`bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition-all flex flex-col gap-3 group relative ${
                              snapshot.isDragging ? 'shadow-lg ring-2 ring-indigo-500/20 rotate-1' : 'hover:shadow-md'
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${tarefa.tagCor}`}>
                                {tarefa.prioridade}
                              </span>

                              <button
                                onClick={() => handleExcluirTarefa(coluna.id, tarefa.id)}
                                className="text-gray-300 hover:text-red-500 transition-colors p-1 rounded-md opacity-0 group-hover:opacity-100"
                                title="Excluir tarefa"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>

                            <div>
                              <h4 className="font-bold text-gray-800 text-sm mb-1">{tarefa.titulo}</h4>
                              <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                                {tarefa.descricao}
                              </p>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-gray-50 text-gray-400 text-xs">
                              {tarefa.data && (
                                <div className="flex items-center gap-1">
                                  <Clock size={14} className="text-blue-500" />
                                  <span className="text-blue-500 font-medium">{tarefa.data}</span>
                                </div>
                              )}
                              {tarefa.comentarios !== undefined && (
                                <div className="flex items-center gap-1">
                                  <MessageSquare size={14} />
                                  <span>{tarefa.comentarios}</span>
                                </div>
                              )}
                              <div className="w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[10px] font-bold ml-auto">
                                P
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>

      {modalAberto && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800 text-lg">Nova Tarefa</h3>
              <button 
                onClick={() => setModalAberto(false)}
                className="text-gray-400 hover:text-gray-600 rounded-lg p-1"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCriarTarefa} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Título da Tarefa</label>
                <input 
                  type="text" 
                  placeholder="Ex: Ajustar layout mobile..."
                  value={novoTitulo}
                  onChange={(e) => setNovoTitulo(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  autoFocus
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Descrição</label>
                <textarea 
                  placeholder="Detalhes sobre a tarefa..."
                  value={novaDescricao}
                  onChange={(e) => setNovaDescricao(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Prioridade</label>
                <select 
                  value={novaPrioridade}
                  onChange={(e) => setNovaPrioridade(e.target.value as 'ALTA' | 'MÉDIA' | 'BAIXA')}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white"
                >
                  <option value="ALTA">ALTA</option>
                  <option value="MÉDIA">MÉDIA</option>
                  <option value="BAIXA">BAIXA</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button 
                  type="button" 
                  onClick={() => setModalAberto(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors"
                >
                  Criar Tarefa
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}