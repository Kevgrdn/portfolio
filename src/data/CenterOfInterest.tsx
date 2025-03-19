import { LaptopIcon, LibraryBigIcon, MedalIcon, PlaneIcon } from "lucide-react";

type ECenterOfInterest = {
	icon: React.ReactElement;
	title: string;
	subtitle?: string;
	description: string;
};

export const interest: ECenterOfInterest[] = [
	{
		icon: <MedalIcon />,
		title: "Sports de combat",
		subtitle: "Boxe/MMA",
		description:
			"J'ai pratiqué la boxe durant 11 ans, à un rythme de 2 à 3 entrainements par semaine. J'ai également participé à certaines compétitions, y comprit des championnats. J'apprécie regarder des combats de haut niveau sur les chaines de sport, en live.",
	},
	{
		icon: <LaptopIcon />,
		title: "Informatique",
		subtitle: "Développement/Hardware",
		description:
			"L'informatique est une passion depuis tout jeune. Petit, j'adorais bricoler mes ordinateurs afin d'en tirer un maximum de performances. Aujourd'hui, je prend toujours autant de plaisir à faire la même chose, en montant des PC et en développant des applications intuitives.",
	},
	{
		icon: <PlaneIcon />,
		title: "Voyages",
		subtitle: "Asie",
		description:
			"J'adore la sensation de voyager à l'étranger, surtout en Asie. Je suis un grand fan de toutes les cultures asiatiques.",
	},
	{
		icon: <LibraryBigIcon />,
		title: "Apprentissage",
		subtitle: "Culture/Langues",
		description:
			"J'adore apprendre de nouvelles choses sur la culture et les langues, notamment l'anglais, le coréen et le japonais.",
	},
];
