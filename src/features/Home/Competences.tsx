import {
	Card,
	CardContent,
	CardHeader,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import {
	AppWindowIcon,
	BotIcon,
	CodeIcon,
	DatabaseIcon,
	type LucideProps,
	ServerIcon,
	ShieldCheckIcon,
} from "lucide-react";

export const HomeCompetences = () => {
	const CompetenceSection = ({
		title,
		icon,
		description,
	}: {
		title: string;
		description: string;
		icon: React.ReactElement<LucideProps>;
	}) => {
		return (
			<Grid item xs={12} md={6}>
				<Stack alignItems={"flex-start"} sx={{ textAlign: "start" }}>
					<Stack direction={"row"} gap={1}>
						{icon}
						<Typography variant="subtitle1" fontWeight={700}>
							{title}
						</Typography>
					</Stack>
					<Typography variant="subtitle2">{description}</Typography>
				</Stack>
			</Grid>
		);
	};

	return (
		<Card>
			<CardHeader
				title={
					<Stack
						spacing={0.5}
						direction={"row"}
						borderRadius={"1rem"}
						alignContent={"center"}
						alignItems={"center"}
					>
						<Typography variant="h5" fontWeight="600" width={"auto"}>
							Mes compétences
						</Typography>
						<CodeIcon size={20} />
					</Stack>
				}
				titleTypographyProps={{ width: "auto" }}
			/>
			<CardContent>
				<Grid container spacing={2}>
					<CompetenceSection
						icon={<AppWindowIcon />}
						title={"Interface utilisateur"}
						description="Création d'interfaces utilisateur modernes, responsives et intuitives avec React et Next.js"
					/>
					<CompetenceSection
						icon={<ServerIcon />}
						title={"Architecture Backend"}
						description="Conception et développement d'architectures robustes et scalables pour le backend avec Node.js, Express.js ou NestJS"
					/>
					<CompetenceSection
						icon={<DatabaseIcon />}
						title={"Déploiement et gestion de bases de données"}
						description="Déploiement et gestion de bases de données avec MongoDB, PostgreSQL ou MySQL"
					/>
					<CompetenceSection
						icon={<ShieldCheckIcon />}
						title={"Qualité et performance"}
						description="Optimisation des performances et garantie de la qualité du code avec tests unitaires, linting et documentation"
					/>
					<CompetenceSection
						icon={<BotIcon />}
						title={"Réalisation et déploiement de bots"}
						description="Création de bot discord avec Node.js et Discord.js"
					/>
				</Grid>
			</CardContent>
		</Card>
	);
};
