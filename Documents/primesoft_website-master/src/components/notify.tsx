import { ReactNode } from "react";

export type NotifyProps = { children: ReactNode; className?: string };

const Notify = ({ children, className }: NotifyProps) => {
  return (
    <div
      className={`  py-2 px-4 rounded-full border flex items-center gap-2 ${className}`}
    >
      {children}
    </div>
  );
};
export default Notify;
