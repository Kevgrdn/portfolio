import {
	Card,
	CardContent,
	CardHeader,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { CheckIcon, GraduationCapIcon, MapPinIcon } from "lucide-react";
import type { FC } from "react";

export const Formation = () => {
	const theme = useTheme();

	type FormationCardProps = {
		title: string;
		subtitle: string;
		location: string;
		diplomaLevel: string;
		description: JSX.Element;
	};
	const FormationCard: FC<FormationCardProps> = ({
		description,
		location,
		subtitle,
		title,
		diplomaLevel,
	}) => {
		return (
			<Card
				sx={{
					width: "100%",
					gap: 2,
					border: `1px solid ${theme.palette.background.paper}`,
					borderRadius: "0.5rem",
					boxShadow: `1px 1px 1px 1px solid ${theme.palette.background.paper} `,
					alignItems: "center",
					transition: "transform 0.3s ease, box-shadow 0.3s ease",
					animation: "fadeIn 0.5s ease-out",
					"&:hover": {
						transform: "translateY(-5px) scale(1.05)",
						boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
					},
					background: theme.palette.background.paper,
				}}
			>
				<CardHeader
					title={
						<Stack direction={"row"} spacing={1}>
							<Stack
								border={`1px solid ${theme.palette.primary.main}`}
								justifyContent={"center"}
								alignItems={"center"}
								borderRadius={"0.5rem"}
								p={1}
								spacing={1}
								direction={"row"}
							>
								<GraduationCapIcon size={18} />
								<Typography fontSize={"0.7rem"}>{diplomaLevel}</Typography>
							</Stack>
							<Stack justifyContent={"center"} spacing={0.25}>
								<Typography variant="subtitle2" fontWeight={600}>
									{title}
								</Typography>

								<Typography fontSize={"0.7rem"} fontWeight={400}>
									{subtitle}
								</Typography>
							</Stack>
						</Stack>
					}
					action={
						<Card
							sx={{
								p: 1,
								background: theme.palette.secondary.dark,
								borderRadius: "0.5rem",
							}}
						>
							<Stack direction={"row"} spacing={0.5} alignItems={"center"}>
								<MapPinIcon size={16} />
								<Typography variant="caption" fontWeight={600}>
									{location}
								</Typography>
							</Stack>
						</Card>
					}
				/>
				<CardContent
					sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
				>
					{description}
				</CardContent>
			</Card>
		);
	};

	return (
		<Stack>
			<Stack spacing={1} width={{ xs: "100%", md: "70%" }} alignSelf={"center"}>
				<FormationCard
					title="ISCOD - Alternance"
					subtitle="Mars 2023 - Avril 2024"
					location="Paris (75)"
					diplomaLevel="BAC +3"
					description={
						<Stack spacing={2}>
							<Stack direction={"row"} alignItems={"center"} spacing={1}>
								<CheckIcon size={18} color="green" />
								<Typography variant="subtitle2">
									<span style={{ color: theme.palette.secondary.light }}>
										Bachelor concepteur développeur d'applications
									</span>
								</Typography>
							</Stack>
							<Typography
								variant="subtitle2"
								fontWeight={400}
								lineHeight={"1rem"}
								textAlign={"justify"}
							>
								Au cours de cette{" "}
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									année d'alternance{" "}
								</span>{" "}
								j'ai acquis les compétences qu'il me manquait pour être apte à
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									{" "}
									réaliser un projet informatique de A à Z
								</span>
								. Cette année fût principalement basée sur la{" "}
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									conception de projets
								</span>
								.
							</Typography>
							<Stack spacing={0.5}>
								<Typography variant="body2">
									&#8226; Conception et développement d'un service d'envoi de
									messages (mail/sms) & notifications
								</Typography>
								<Typography variant="body2">
									&#8226; Développement d'un CRM
								</Typography>
								<Typography variant="body2">
									&#8226; Développement de modules NPM
								</Typography>
								<Typography variant="body2">
									&#8226; Développement d'un application de gestion
								</Typography>
							</Stack>
						</Stack>
					}
				/>
				<FormationCard
					title="Openclassrooms"
					diplomaLevel="BAC +2"
					subtitle="Mars 2021 - Novembre 2021"
					location="Paris (75)"
					description={
						<Stack spacing={2}>
							<Stack direction={"row"} alignItems={"center"} spacing={1}>
								<CheckIcon size={18} color="green" />
								<Typography variant="subtitle2">
									<span style={{ color: theme.palette.secondary.light }}>
										Titre de développeur web
									</span>
								</Typography>
							</Stack>
							<Typography
								variant="subtitle2"
								fontWeight={400}
								lineHeight={"1rem"}
								textAlign={"justify"}
							>
								Durant ces{" "}
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									9 mois d'étude
								</span>
								, j'ai apprit les bases du développement web. En commençant par
								la{" "}
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									programmation front-end{" "}
								</span>{" "}
								avec{" "}
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									HTML, CSS et Javascript
								</span>
								, puis la{" "}
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									programmation orientée back-end
								</span>{" "}
								avec{" "}
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									ExpressJS
								</span>{" "}
								ainsi que le{" "}
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									SEO
								</span>
								.
							</Typography>
							<Stack spacing={0.5}>
								<Typography variant="body2">
									&#8226; Création d'un réseau social d'entreprise
								</Typography>
								<Typography variant="body2">
									&#8226; Création d'une API sécurisée
								</Typography>
								<Typography variant="body2">
									&#8226; Création d'un site e-commerce
								</Typography>
								<Typography variant="body2">
									&#8226; Optimisation du référencement d'un site web
								</Typography>
								<Typography variant="body2">
									&#8226; Dynamisation de page web avec des animations CSS
								</Typography>
								<Typography variant="body2">
									&#8226; Intégration de maquette HTML
								</Typography>
							</Stack>
						</Stack>
					}
				/>
				<FormationCard
					title="Lycée Rabelais"
					diplomaLevel="BAC"
					subtitle="Septembre 2012 - Juin 2013"
					location="Chinon (37)"
					description={
						<Stack direction={"row"} alignItems={"center"} spacing={1}>
							<CheckIcon size={18} color="green" />
							<Typography variant="subtitle2">
								<span style={{ color: theme.palette.secondary.light }}>
									Baccalauréat technologique spécialité marketing{" "}
								</span>
							</Typography>
						</Stack>
					}
				/>
			</Stack>
		</Stack>
	);
};
