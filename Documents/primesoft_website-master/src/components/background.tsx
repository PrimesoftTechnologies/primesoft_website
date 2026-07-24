import { ReactNode } from "react";

const Background = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#182540_0%,#1c2943_42%,#1a2740_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_105%,rgba(255,115,0,0.14),transparent_30%),radial-gradient(circle_at_12%_70%,rgba(255,125,64,0.08),transparent_24%),radial-gradient(circle_at_82%_82%,rgba(64,124,255,0.08),transparent_22%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[78px_64px]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.03))]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
export default Background;
