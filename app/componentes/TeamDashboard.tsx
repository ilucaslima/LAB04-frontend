import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,} from "@fortawesome/free-solid-svg-icons";

type Member = {
  name: string;
  role: string;
  email: string;
  function: string;
  status: string;
};

const members: Member[] = [
  { name: "Elena Rodriguez", role: "Líder de Design", email: "elena.r@taskflow.com", function: "Administrador", status: "Ativo" },
  { name: "Marcus Chen", role: "Dev Fullstack", email: "m.chen@taskflow.com", function: "Membro", status: "Ativo" },
  { name: "Sarah Jenkins", role: "Stakeholder", email: "jenkins.s.@external.com", function: "Visualizador", status: "Convidado" },
  { name: "David Okoro", role: "Gerente de Produto", email: "d.okoro@taskflow.com", function: "Membro", status: "Ativo" },
];

export default function TeamDashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-4xl font-bold">Gerenciamento de Equipe</h1>
          <p className="text-lg text-gray-600">
            Gerencie os membros do seu espaço de trabalho, funções e status de convite
          </p>
        </div>
        <button className="flex items-center bg-blue-600 text-white px-12 py-2 rounded-md hover:bg-blue-700 transition">
          
          <span className="text-sm font-medium">Convidar Membro</span>
        </button>
      </div>

      
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 border border-gray-400 rounded-lg flex items-center">
          
          <div>
            <p className="text-sm text-gray-500">TOTAL DE MEMBROS</p>
            <p className="text-lg font-semibold">42</p>
          </div>
        </div>
        <div className="bg-white p-4 border border-gray-400 rounded-lg flex items-center">
          
          <div>
            <p className="text-sm text-gray-500">ATIVOS AGORA</p>
            <p className="text-lg font-semibold">18</p>
          </div>
        </div>
        <div className="bg-white p-4 border border-gray-400 rounded-lg flex items-center">
          
          <div>
            <p className="text-sm text-gray-500">CONVITES PENDENTES</p>
            <p className="text-lg font-semibold">5</p>
          </div>
        </div>
        <div className="bg-white p-4 border border-gray-400 rounded-lg flex items-center">
          <div>
            <p className="text-sm text-gray-500">DIVISÃO POR FUNÇÃO</p>
              <div className="flex space-x-4">
                <p className="text-lg bg-blue-300/50 text-blue-900 p-2 border border-gray-400 rounded-r-full rounded-l-full flex items-center">Admin:4</p>
                <p className="text-lg bg-blue-800/50 p-2 border border-gray-400 rounded-r-full rounded-l-full flex items-center">Membro:12</p>
            </div>
          </div>
        </div>
      </div>

      
             
        <div className="flex items-center justify-between mb-4 bg-white p-4 border border-gray-400 rounded-lg">
          
          
          <div className="flex items-center space-x-2">
            <div className="relative">
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"  
              />
              <input 
                type="text"
                placeholder="Filtrar por nome ou e-mail..."
                className="pl-9 pr-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="flex items-center bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition">
              
              <span className="text-sm">Função</span>
            </button>

            <button className="flex items-center bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition">
              
              <span className="text-sm">Status</span>
            </button>
          </div>

          
          <p className="text-sm text-gray-600">Exibindo 42 membros</p>
        </div>
                
      

      
      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Membro</th>
              <th className="p-3">E-mail</th>
              <th className="p-3">Função</th>
              <th className="p-3">Status</th>
              <th className="p-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{m.name} <span className="text-sm text-gray-500">({m.role})</span></td>
                <td className="p-3">{m.email}</td>
                <td className="p-3">{m.function}</td>
                <td className="p-3">{m.status}</td>
                <td className="p-3">
                  <button className="text-blue-500 hover:underline">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
     
      <div className="flex justify-between items-center mt-4">
        
        <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
          Anterior
        </button>

        
        <div className="flex space-x-2">
          <button className="px-3 py-2 bg-blue-600 text-white rounded-md">1</button>
          <button className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300">2</button>
          <button className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300">...</button>
          <button className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300">12</button>
        </div>

       
        <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
          Próximo
        </button>
      </div>
    </div>
  );
}
