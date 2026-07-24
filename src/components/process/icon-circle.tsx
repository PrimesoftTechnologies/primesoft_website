import { ReactNode } from "react";

export interface IconCircleProps {
  className?: string;
  icon: ReactNode;
}

const IconCircle = ({ className, icon }: IconCircleProps) => {
  return (
    <div
      className={`size-10 rounded-full bg-white/90 flex items-center justify-center border-4 border-secondary-100 shadow-md ${className}`}
    >
      <div className="size-5 text-secondary-400">{icon}</div>
    </div>
  );
};
export default IconCircle;
