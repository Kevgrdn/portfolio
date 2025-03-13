import {
	Button,
	Grid,
	Stack,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	Typography,
} from "@mui/material";
import { AboutMe } from "../../features/About/AboutMe";
import { BikeIcon, LuggageIcon, SchoolIcon } from "lucide-react";
import { useState } from "react";
import { Tag } from "../../components/Tag";

enum EMode {
	FORMATION = "FORMATION",
	EXPERIENCE = "EXPERIENCE",
	CENTRES_D_INTERET = "CENTRES_D_INTERET",
}

export const About = () => {
	const [mode, setMode] = useState<EMode>(EMode.FORMATION);

	const StyledButton = ({
		modeEqual,
		btnTitle,
		icon,
	}: { modeEqual: EMode; btnTitle: string; icon: JSX.Element }) => {
		return (
			<Button
				sx={{
					border: "1px solid transparent",
					borderRadius: "0.5rem",
					...(mode === modeEqual && {
						border: "1px solid white",
						background: "#BCBDA7",
						color: "#594431",

						// A GARDER (PAS SUR DU STYLE)
						// background:
						// 	"linear-gradient(to bottom right, rgb(83, 140, 247), rgb(194, 45, 181))",
						// boxShadow: "0 0 10px 1px  white",
					}),
					":hover": {
						background: "#BCBDA7",
						border: "1px solid white",
						color: "#594431",
					},
				}}
				startIcon={icon}
				onClick={() => setMode(modeEqual)}
			>
				{btnTitle}
			</Button>
		);
	};

	return (
		<Stack width={1} height={1} spacing={2} alignItems={"center"}>
			<AboutMe />
			<Stack justifyContent={"center"} direction={"row"} spacing={2}>
				<StyledButton
					btnTitle="Formation"
					icon={<SchoolIcon size={16} />}
					modeEqual={EMode.FORMATION}
				/>
				<StyledButton
					btnTitle="Expérience"
					icon={<LuggageIcon size={16} />}
					modeEqual={EMode.EXPERIENCE}
				/>
				<StyledButton
					btnTitle="Centres d'intérêts"
					icon={<BikeIcon size={16} />}
					modeEqual={EMode.CENTRES_D_INTERET}
				/>
			</Stack>

			{mode === EMode.FORMATION && (
				<Stepper orientation="vertical" sx={{ maxWidth: "50%" }}>
					<Step active>
						<StepLabel>
							<Stack>
								<Typography variant="subtitle2" fontWeight={600}>
									2023-2024 ISCOD Paris
								</Typography>
								<Typography variant="body2">Contrat en alternance</Typography>
							</Stack>
						</StepLabel>
						<StepContent>
							<Grid container spacing={1}>
								<Grid item xs={12} md={6}>
									<Stack spacing={1}>
										<Typography variant="body2">
											&#8226; Conception et développement d'une application
											d'envoi de mails/notifications/sms
										</Typography>
									</Stack>
								</Grid>
								<Grid item xs={12} md={6}>
									<Typography variant="body2">
										&#8226; Développement d'un CRM
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Stack spacing={2}>
										<Stack spacing={0.5}>
											<Typography variant="subtitle2">
												Compétences de développement :
											</Typography>
											<Stack direction={"row"} spacing={0.5}>
												<Tag label="Javascript" />
												<Tag label="Typescript" />
												<Tag label="NodeJS" />
												<Tag label="NestJS" />
												<Tag label="React" />
												<Tag label="UML" />
												<Tag label="PostgreSQL" />
											</Stack>
										</Stack>
										<Stack spacing={0.5}>
											<Typography variant="subtitle2">
												Compétences de conception :
											</Typography>
											<Stack direction={"row"} spacing={0.5}>
												<Tag label="Visual Paradigm" />
												<Tag label="UML" />
												<Tag label="Diagrammes de classe" />
												<Tag label="Maquettage" />
												<Tag label="Wireframing" />
												<Tag label="Figma" />
											</Stack>
										</Stack>
									</Stack>
								</Grid>
							</Grid>
						</StepContent>
					</Step>
					<Step active>
						<StepLabel>
							<Typography variant="subtitle2" fontWeight={600}>
								2021-2021 OpenClassrooms
							</Typography>
							<Typography variant="body2">
								Parcours diplomant | Réalisation de 7 projets web
							</Typography>
						</StepLabel>
						<StepContent>
							<Grid container spacing={1}>
								<Grid item xs={12} md={6}>
									<Typography variant="body2">
										&#8226; Création d'un réseau social d'entreprise
									</Typography>
								</Grid>
								<Grid item xs={12} md={6}>
									<Typography variant="body2">
										&#8226; Création d'une API sécurisée
									</Typography>
								</Grid>
								<Grid item xs={12} md={6}>
									<Typography variant="body2">
										&#8226; Création d'un site e-commerce{" "}
									</Typography>
								</Grid>
								<Grid item xs={12} md={6}>
									<Typography variant="body2">
										&#8226; Amélioration du référencement d'un blog (SEO)
									</Typography>
								</Grid>
								<Grid item xs={12} md={6}>
									<Typography variant="body2">
										&#8226; Dynamisation d'une page web avec des animations
									</Typography>
								</Grid>
								<Grid item xs={12} md={6}>
									<Typography variant="body2">
										&#8226; Intégration d'une maquette en HTML/CSS
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Stack spacing={1}>
										<Typography variant="subtitle2">
											Compétences de développement :
										</Typography>
										<Stack direction={"row"} spacing={0.5}>
											<Tag label="HTML" />
											<Tag label="CSS" />
											<Tag label="SASS" />
											<Tag label="Javascript" />
											<Tag label="SEO" />
										</Stack>
									</Stack>
								</Grid>
							</Grid>
						</StepContent>
					</Step>
				</Stepper>
			)}
		</Stack>
	);
};
