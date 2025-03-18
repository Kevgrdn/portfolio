import {
	BookOpenIcon,
	BrainCircuitIcon,
	BrainIcon,
	ClockIcon,
	MessageSquareIcon,
	ShuffleIcon,
	UsersIcon,
	WandIcon,
} from "lucide-react";

type TSoftskill = {
	icon: JSX.Element;
	title: string;
};

export const softskill: TSoftskill[] = [
	{
		icon: <BrainIcon />,
		title: "Intelligence émotionelle",
	},
	{
		icon: <ShuffleIcon />,
		title: "Flexible",
	},
	{
		icon: <WandIcon />,
		title: "Inventif",
	},
	{
		icon: <BrainCircuitIcon />,
		title: "Résolution de problèmes",
	},
	{
		icon: <UsersIcon />,
		title: "Collaboration",
	},
	{
		icon: <BookOpenIcon />,
		title: "Curiosité",
	},
	{
		icon: <ClockIcon />,
		title: "Gestion du temps",
	},
	{
		icon: <MessageSquareIcon />,
		title: "Communication",
	},
];
