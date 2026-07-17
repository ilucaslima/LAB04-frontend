type StatsCard ={
  icon:React.ReactNode,
  title: string;
  value: number;
  percentage?: string;
  percentageColor?: string;
  percentageBg?: string;
  progress: number;
  progressColor?: string;

}

export default function CardsHeader ({
  icon,
  title,
  value,
  percentage,
  percentageColor,
  percentageBg,
  progress,
  progressColor}: StatsCard ){


    return(
         <div className="w-80 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
          {icon}
        </div>

        {percentage && (
          <span
            className={`rounded-full px-4 py-2 text-sm font-semibold ${percentageBg} ${percentageColor}`}
          >
            {percentage}
          </span>
        )}
      </div>

      <h3 className="mt-8 text-sm uppercase tracking-[0.25em] text-slate-500">
        {title}
      </h3>

      <p className="mt-2 text-6xl font-bold text-slate-900">
        {value}
      </p>

      <div className="mt-8 h-2 rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full ${progressColor}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
    )
}