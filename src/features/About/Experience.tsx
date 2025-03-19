import {
	Box,
	Card,
	CardContent,
	CardHeader,
	Stack,
	Tooltip,
	Typography,
	useTheme,
} from "@mui/material";
import { BriefcaseBusinessIcon, MapPinIcon } from "lucide-react";
import type { FC } from "react";
import css from "../../assets/stackIcons/css.svg";
import eslint from "../../assets/stackIcons/eslint.svg";
import express from "../../assets/stackIcons/express.svg";
import git from "../../assets/stackIcons/git.svg";
import gitlab from "../../assets/stackIcons/gitlab.svg";
import html from "../../assets/stackIcons/html.svg";
import jest from "../../assets/stackIcons/jest.svg";
import js from "../../assets/stackIcons/js.svg";
import mongo from "../../assets/stackIcons/mongo.svg";
import nest from "../../assets/stackIcons/nest.svg";
import node from "../../assets/stackIcons/node.svg";
import npm from "../../assets/stackIcons/npm.svg";
import pg from "../../assets/stackIcons/pg.svg";
import prettier from "../../assets/stackIcons/prettier.svg";
import react from "../../assets/stackIcons/react.svg";
import ts from "../../assets/stackIcons/ts.svg";
import vite from "../../assets/stackIcons/vite.svg";
import vitest from "../../assets/stackIcons/vitest.svg";

export const Experience = () => {
	const theme = useTheme();

	type ExperienceCardProps = {
		title: string;
		subtitle: string;
		location: string;
		description: JSX.Element;
	};
	const ExperienceCard: FC<ExperienceCardProps> = ({
		description,
		location,
		subtitle,
		title,
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
								<BriefcaseBusinessIcon size={18} />
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

	const StyledIcon = ({ src, alt }: { src: string; alt: string }) => {
		return (
			<Box>
				<Tooltip title={alt}>
					<img src={src} alt={alt} />
				</Tooltip>
			</Box>
		);
	};

	return (
		<Stack>
			<Stack spacing={1} width={{ xs: "100%", md: "70%" }} alignSelf={"center"}>
				<ExperienceCard
					subtitle="Avril 2024 - Mars 2025"
					title="ASREC Centre"
					description={
						<Stack spacing={2}>
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
									année d'expérience{" "}
								</span>{" "}
								j'ai amélioré mes compétences de{" "}
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									{" "}
									conception
								</span>
								. J'ai conçu et développé un service permettant d'envoyer des
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									{" "}
									emails, SMS et notifications
								</span>
								. Tout en participant à{" "}
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									{" "}
									l'élaboration
								</span>{" "}
								et la
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									{" "}
									maintenance
								</span>{" "}
								de diverses solutions.
							</Typography>
							<Stack spacing={1}>
								<Typography
									variant="subtitle2"
									sx={{ textDecoration: "underline" }}
								>
									Compétences front-end :
								</Typography>
								<Stack direction={"row"} spacing={1} flexWrap={"wrap"}>
									<StyledIcon src={html} alt="HTML" />
									<StyledIcon src={css} alt="CSS" />
									<StyledIcon src={js} alt="Javascript" />
									<StyledIcon src={ts} alt="Typescript" />
									<StyledIcon src={react} alt="ReactJS" />
									<StyledIcon src={vite} alt="Vite" />
								</Stack>
							</Stack>
							<Stack spacing={1}>
								<Typography
									variant="subtitle2"
									sx={{ textDecoration: "underline" }}
								>
									Compétences back-end :
								</Typography>
								<Stack direction={"row"} spacing={1} flexWrap={"wrap"}>
									<StyledIcon src={js} alt="Javascript" />
									<StyledIcon src={ts} alt="Typescript" />
									<StyledIcon src={nest} alt="NestJS" />
									<StyledIcon src={pg} alt="PostgreSQL" />
									<StyledIcon src={vitest} alt="Vitest" />
									<StyledIcon src={jest} alt="Jest" />
								</Stack>
							</Stack>
							<Stack spacing={1}>
								<Typography
									variant="subtitle2"
									sx={{ textDecoration: "underline" }}
								>
									Autres :
								</Typography>
								<Stack direction={"row"} spacing={1} flexWrap={"wrap"}>
									<StyledIcon src={eslint} alt="Eslint" />
									<StyledIcon src={prettier} alt="Prettier" />
									<StyledIcon src={node} alt="NodeJS" />
									<StyledIcon src={npm} alt="NPM" />
									<StyledIcon src={git} alt="Git" />
									<StyledIcon src={gitlab} alt="Gitlab" />
								</Stack>
							</Stack>
						</Stack>
					}
					location="Tours (37)"
				/>
				<ExperienceCard
					subtitle="Mars 2022 - Avril 2023"
					title="ASREC Centre"
					description={
						<Stack spacing={2}>
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
									année d'expérience{" "}
								</span>{" "}
								j'ai fortement amélioré mes
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									{" "}
									compétences de développement
								</span>
								, j'ai participé à la{" "}
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									{" "}
									réalisation
								</span>{" "}
								de divers projets tels qu'un CRM ou encore des{" "}
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									modules NPM
								</span>
								. J'ai peaufiné mon utilisation du{" "}
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									Javascript
								</span>
								, avec du{" "}
								<span
									style={{
										color: theme.palette.secondary.light,
										fontWeight: 600,
									}}
								>
									Typescript
								</span>{" "}
								permettant de produire un code de meilleure qualité.
							</Typography>
							<Stack spacing={1}>
								<Typography
									variant="subtitle2"
									sx={{ textDecoration: "underline" }}
								>
									Compétences front-end :
								</Typography>
								<Stack direction={"row"} spacing={1} flexWrap={"wrap"}>
									<StyledIcon src={html} alt="HTML" />
									<StyledIcon src={css} alt="CSS" />
									<StyledIcon src={js} alt="Javascript" />
									<StyledIcon src={ts} alt="Typescript" />
									<StyledIcon src={react} alt="ReactJS" />
								</Stack>
							</Stack>
							<Stack spacing={1}>
								<Typography
									variant="subtitle2"
									sx={{ textDecoration: "underline" }}
								>
									Compétences back-end :
								</Typography>
								<Stack direction={"row"} spacing={1} flexWrap={"wrap"}>
									<StyledIcon src={express} alt="Express" />
									<StyledIcon src={mongo} alt="MongoDB" />
								</Stack>
							</Stack>
							<Stack spacing={1}>
								<Typography
									variant="subtitle2"
									sx={{ textDecoration: "underline" }}
								>
									Autres :
								</Typography>
								<Stack direction={"row"} spacing={1} flexWrap={"wrap"}>
									<StyledIcon src={git} alt="Git" />
									<StyledIcon src={gitlab} alt="Gitlab" />
									<StyledIcon src={node} alt="NodeJS" />
									<StyledIcon src={npm} alt="NPM" />
								</Stack>
							</Stack>
						</Stack>
					}
					location="Tours (37)"
				/>
			</Stack>
		</Stack>
	);
};
