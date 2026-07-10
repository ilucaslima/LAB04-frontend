import { CiCalendar } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { TbCalendarTime } from "react-icons/tb";

import CardsHeader   from "../components/CardsHeader"


export default function DashBoardHeader(){
     return(<>
       <main className="min-h-screen bg-[#F7F8FC] p-10">
      <header className="mb-10 flex items-start justify-between">
        <div>
          <h1 className="text-5xl font-bold text-slate-900">
            Bom dia, Sarah
          </h1>

          <p className="mt-2 text-xl text-slate-500">
            Aqui está o que está acontecendo com seus projetos hoje.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-100 px-5 py-3 text-lg font-medium text-slate-700">
         <CiCalendar />
          Esta Semana
        </button>
      </header>

      {/* Cards */}
      <section className="flex gap-6">

        {/* Card 1 */}
       <CardsHeader 
        icon= {< LuClipboardList className="text-3xl text-blue-600"/> }
        title="Total de tarefas"
        value={154}
        percentage="+12%"
        progress={75}
        progressColor="bg-blue-600"
       
       />

        {/* Card 2 */}
        <CardsHeader
        
         icon={< FaRegCheckCircle className="text-3xl text-orange-600" />}
        title="Concluídas"
        value={89}
        percentage="+5%"
        percentageBg="bg-orange-100"
        percentageColor="text-orange-600"
        progress={50}
        progressColor="bg-orange-600"/>

        {/* Card 3 */}
        <CardsHeader 
        icon={<TbCalendarTime className="text-3xl text-slate-600" />}
        title="Em andamento"
        value={42}
        progress={70}
        progressColor="bg-slate-500"
        />

        {/* Card Desempenho */}
        <div className="flex w-80 h-60 flex-col justify-between rounded-3xl bg-[#1D2033] p-5 text-white shadow-sm">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Velocidade da equipe
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Alto Desempenho
            </h2>
          </div>

          <div className="mt-8 flex items-center">

            <img
              className="h-10 w-10 rounded-full border-2 border-[#1D2033]"
              src="https://i.pravatar.cc/40?img=1"
              alt=""
            />

            <img
              className="-ml-3 h-10 w-10 rounded-full border-2 border-[#1D2033]"
              src="https://i.pravatar.cc/40?img=2"
              alt=""
            />

            <img
              className="-ml-3 h-10 w-10 rounded-full border-2 border-[#1D2033]"
              src="https://i.pravatar.cc/40?img=3"
              alt=""
            />

            <div className="-ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-300 text-sm font-semibold text-slate-700">
              +4
            </div>

          </div>

        </div>

      </section>
    </main>
        </>
     )
}