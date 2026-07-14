import { Activity } from "@/src/types/activity";

type Props = {
  activity: Activity;
};

export default function ActivityItem({ activity }: Props) {
  return (
    <section className="p-6 w-full flex gap-6 border-bs border-gray-300 items-center">
      <img
        src={activity.user.avatar}
        alt="Perfil"
        className="w-[40px] h-[40px] rounded-full bg-black"
      />

      <div className="flex flex-col gap-2">
        <p>
          <span className="text-black font-bold">
            {activity.user.name} {activity.action}{" "}
          </span>

          {activity.type === "status" && (
            <>
              <span className="text-[#005BBC] text-bold ">
                {activity.title} para{" "}
              </span>

              {activity.status === "EM REVISÃO" && (
                <span className="bg-[#0073EA1A] text-[#005BBC] uppercade text-[11px] font-bold p-[5px] rounded-xl">
                  EM REVISÃO
                </span>
              )}

              {activity.status === "ATRASADO" && (
                <span className="bg-[#FFDAD6] text-[#BA1A1A] uppercade text-[11px] font-bold p-[5px] rounded-xl">
                  EM REVISÃO
                </span>
              )}
            </>
          )}

          {activity.type === "comment" && (
            <span className="text-[#005BBC] text-bold ">
              {activity.title}{" "}
              <span className="text-black font-bold">{activity.comment}</span>
            </span>
          )}
        </p>
        <p className="font-normal text-[#414754] uppercase">
          {activity.createdAt} • Projeto: {activity.project}
        </p>
      </div>
    </section>
  );
}
