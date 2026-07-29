import Header from "../components/Header";
import KanbanBoard from "../components/KanbanBoard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Cabeçalho no topo */}
      <Header />
      
      {/* Quadro Kanban ocupando a tela */}
      <KanbanBoard />
    </main>
  );
}