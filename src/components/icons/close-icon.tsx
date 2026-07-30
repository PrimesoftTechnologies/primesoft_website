import { FC, SVGProps } from "react";

const CloseIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1rem"
      height="1rem"
      color="currentColor"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" />
    </svg>
  );
};
export default CloseIcon;