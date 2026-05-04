
export type BadgeProps = {
  status?: "active" | "paused" | "completed";
  onClick: () => void;
};

export const badgeStatus = {
  active: "text-blue-300 bg-blue-800",
  paused: "text-yellow-300 bg-yellow-800",
  completed: "text-emerald-300 bg-emerald-800",
};

export function Badge({ onClick, status = "active" }: BadgeProps) {
  const upperStatus = status.toUpperCase(); // Para modificar las props se debe crear una variable

  return (
    <div className=" py-5 px-3 flex justify-center items-center flex-col gap-3 border border-slate-800 rounded">
      <div className={` px-3 py-1 rounded ${badgeStatus[status]}`}>
        {upperStatus}
      </div>
      <button
        onClick={ onClick }
        className=" text-center text-base text-red-500 bg-red-900 rounded px-2 py-1 cursor-pointer"
      >
        Click
      </button>
    </div>
  );
}
