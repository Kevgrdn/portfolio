import {
	Card,
	CardContent,
	CardHeader,
	Grid,
	Stack,
	Typography,
	useTheme,
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
	const theme = useTheme();
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
				<Stack spacing={1}>
					<Stack direction={"row"} alignItems={"center"} gap={1}>
						{icon}
						<Typography variant="subtitle1" fontWeight={700}>
							{title}
						</Typography>
					</Stack>
					<Typography color={"grey"}>{description}</Typography>
				</Stack>
			</Grid>
		);
	};

	const iconColor = theme.palette.primary.main;
	return (
		<Card
			sx={{
				boxShadow: "none",
				backgroundColor: "#F7F8F9",
				borderRadius: "1rem",
				textAlign: "start",
				px: "3rem",
				py: "1rem",
				":hover": {
					boxShadow: `0px 0px 8px 0px ${theme.palette.primary.main}`,
				},
			}}
		>
			<CardHeader
				title={
					<Stack
						spacing={0.5}
						direction={"row"}
						borderRadius={"1rem"}
						alignContent={"center"}
						alignItems={"center"}
						p={1}
					>
						<Typography variant="h5" fontWeight="600" width={"auto"}>
							Mes compétences
						</Typography>
						<CodeIcon size={20} color={iconColor} />
					</Stack>
				}
				titleTypographyProps={{ width: "auto" }}
			/>
			<CardContent>
				<Grid container spacing={2}>
					<CompetenceSection
						icon={<AppWindowIcon color={iconColor} />}
						title={"Interface utilisateur"}
						description="Création d'interfaces utilisateur modernes, responsives et intuitives avec React et Next.js"
					/>
					<CompetenceSection
						icon={<ServerIcon color={iconColor} />}
						title={"Architecture Backend"}
						description="Conception et développement d'architectures robustes et scalables pour le backend avec Node.js, Express.js ou NestJS"
					/>
					<CompetenceSection
						icon={<DatabaseIcon color={iconColor} />}
						title={"Déploiement et gestion de bases de données"}
						description="Déploiement et gestion de bases de données avec MongoDB, PostgreSQL ou MySQL"
					/>
					<CompetenceSection
						icon={<ShieldCheckIcon color={iconColor} />}
						title={"Qualité et performance"}
						description="Optimisation des performances et garantie de la qualité du code avec tests unitaires, linting et documentation"
					/>
					<CompetenceSection
						icon={<BotIcon color={iconColor} />}
						title={"Réalisation et déploiement de bots"}
						description="Création de bot discord avec Node.js et Discord.js"
					/>
				</Grid>
			</CardContent>
		</Card>
	);
};
