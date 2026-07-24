import Card from "@/app/components/card";
import {
  ClipboardIcon,
  ClockIcon,
  SupportIcon,
  UserGroupIcon,
} from "@/components/icons";

const cards = [
  {
    title: "Fast Deployment",
    description: "Launch your AI or automation system in weeks, not months",
    icon: <ClockIcon className="text-secondary-400 size-6" />,
  },
  {
    title: "Remote & Onsite Support",
    description: "Technical support available during setup and after launch",
    icon: <SupportIcon className="text-secondary-400 size-6" />,
  },
  {
    title: "End-to-End Implementation",
    description: "From planning to deployment and integration",
    icon: <ClipboardIcon className="text-secondary-400 size-6" />,
  },
  {
    title: "Training Included",
    description: "We train your team to fully use the system",
    icon: <UserGroupIcon className="text-secondary-400 size-6" />,
  },
] as const;

const HeroCards = () => {
  return (
    <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mb-20 lg:grid-cols-4 lg:mx-60 lg:gap-6">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          icon={card.icon}
          title={card.title}
          description={card.description}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
};
export default HeroCards;
