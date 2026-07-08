import Image from "next/image";
import Header from "../components/Header"; // Importando o header

export default function Home() {
  return (
    <main>
      {/* Adicionamos o Header aqui em cima */}
      <Header />
      
      {/* O resto da sua página */}
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Talkflow 🚀</h1>
      </div>
    </main>
  );
}