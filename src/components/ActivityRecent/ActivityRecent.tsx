import ActivityItem from "./ActivityItem";
import { Activity } from "@/src/types/activity";
import Image from "next/image";
import icon from "../../assets/images/view-all.png";

export default function ActivityRecent() {
  const activities: Activity[] = [
    {
      id: 1,
      user: {
        name: "Marcus Chen",
        avatar: "/avatars/marcus.png",
      },
      type: "status",
      action: "atualizou o status de",
      title: "Re-renderização da Animação Hero",
      status: "EM REVISÃO",
      createdAt: "2 horas atrás",
      project: "Site de Marketing",
    },
    {
      id: 2,
      user: {
        name: "Leo Valdez",
        avatar: "/avatars/leo.png",
      },
      type: "comment",
      action: "comentou em",
      title: "Plano de Migração de Banco de Dados",
      comment: "Adicionei o esquema atualizado à unidade compartilhada.",
      createdAt: "4 horas atrás",
      project: "Infraestrutura de Backend",
    },
    {
      id: 3,
      user: {
        name: "Aria Jenkins",
        avatar: "/avatars/aria.png",
      },
      type: "status",
      action: "marcou",
      title: "Auditoria de Custos AWS",
      status: "ATRASADO",
      createdAt: "6 horas atrás",
      project: "Finanças",
    },
  ];
  return (
    <section className="bg-white max-w-[990px] w-full border rounded-xl border-gray-300">
      <div className="w-full p-6 flex items-center justify-between">
        <h1 className="text-xl text-black font-semibold">Atividade Recente</h1>
        <p className="text-[#005BBC] cursor-pointer font-normal flex items-center gap-1">
          Marcar todas como lidas
          <Image
            src={icon}
            alt="Mostrar todas as atividades"
            className="w-[16.42px] h-[9.02px]"
          />
        </p>
      </div>
      <div>
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity}></ActivityItem>
        ))}
      </div>
      <div className="flex justify-center p-6">
        <p className="text-center text-base font-normal text-[#414754] cursor-pointer">
          Carregar mais atividades
        </p>
      </div>
    </section>
  );
}
