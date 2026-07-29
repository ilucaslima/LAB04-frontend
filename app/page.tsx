import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import KanbanBoard from "../components/KanbanBoard";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Menu Lateral esquerdo */}
      <Sidebar />

      {/* Área Principal (Direita) */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <Header />
        <main className="flex-1">
          <KanbanBoard />
        </main>
      </div>
    </div>
  );
}