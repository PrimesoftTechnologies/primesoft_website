import { CapIcon, ClipboardIcon, LayersIcon, RocketIcon, SearchIcon } from "../icons";

const stepsItems = [
  {
    id: 1,
    step: "STEP 1",
    title: "Business Assessment",
    description:
      "We analyze your current workflows, call center operations, and business challenges to identify automation opportunities.",
    cardPosition:
      "left-1 top-[60%] w-[248px] md:-left-6 md:top-[65%] xl:-left-8 xl:top-[65%]",
    line: { x1: 17, y1: 74, x2: 28, y2: 66 },
    icon: <ClipboardIcon />,
  },
  {
    id: 2,
    step: "STEP 2",
    title: "Solution Design",
    description:
      "We design a tailored Odoo and Call Center architecture including CRM, telephony integration, and workflows.",
    cardPosition:
      "left-[13%] top-[4%] w-[248px] md:left-[10%] md:top-[0%] xl:left-[10%] xl:top-[0%]",
    line: { x1: 26, y1: 20, x2: 32, y2: 36 },
    icon: <SearchIcon />,
  },
  {
    id: 3,
    step: "STEP 3",
    title: "System Implementation",
    description:
      "We configure Odoo, integrate call center tools, and automate your business processes in phases.",
    cardPosition:
      "right-[16%] top-[2%] w-[248px] md:right-[12%] md:top-[-1%] xl:right-[24%] xl:top-[-1%]",
    line: { x1: 59, y1: 18, x2: 52, y2: 31 },
    icon: <LayersIcon />,
  },
  {
    id: 4,
    step: "STEP 4",
    title: "Training & Go-Live",
    description:
      "We train your team, test workflows, and launch the system with minimal disruption.",
    cardPosition:
      "left-[37%] top-[69%] w-[248px] md:left-[39%] md:top-[74%] xl:left-[41%] xl:top-[74%]",
    line: { x1: 60, y1: 80, x2: 66, y2: 73 },
    icon: <CapIcon />,
  },
  {
    id: 5,
    step: "STEP 5",
    title: "Support & Optimization",
    description:
      "We provide ongoing support, improvements, hosting, and performance monitoring.",
    cardPosition:
      "right-1 top-[62%] w-[248px] md:-right-4 md:top-[67%] xl:-right-2 xl:top-[67%]",
    line: { x1: 77, y1: 64, x2: 73, y2: 57 },
    icon: <RocketIcon />,
  },
] as const;

export default stepsItems;