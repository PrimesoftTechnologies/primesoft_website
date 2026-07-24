import { ReactNode } from "react";

export type IconContainerProps={
    children:ReactNode
    className?:string
}
const IconContainer = ({ children, className }: IconContainerProps) => {
  return <div className={`bg-secondary-500/10 rounded-xl flex justify-center p-3 w-fit items-center hover:bg-secondary-500/20 ${className}`}>{children}</div>;
};
export default IconContainer;
