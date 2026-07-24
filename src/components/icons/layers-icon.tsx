import { FC, SVGProps } from "react";

const LayersIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      height="1rem"
      width="1rem"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 4 4.5 8 12 12l7.5-4L12 4Z" />
      <path d="m4.5 12 7.5 4 7.5-4" />
      <path d="m4.5 16 7.5 4 7.5-4" />
    </svg>
  );
};
export default LayersIcon;
