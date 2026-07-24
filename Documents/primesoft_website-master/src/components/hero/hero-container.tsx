import { ReactNode } from "react";
const HeroContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid justify-center gap-10 py-20 max-sm:pt-0">
      {children}
        
    </div>
  );
};
export default HeroContainer;
