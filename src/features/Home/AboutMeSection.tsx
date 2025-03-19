import {
	Box,
	Card,
	CardActionArea,
	Grid,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import {
	CheckIcon,
	HeartIcon,
	MailIcon,
	PaletteIcon,
	PhoneIcon,
	RocketIcon,
} from "lucide-react";
import meFullSize from "../../assets/me_full.jpg";
import { useState } from "react";

export const AboutMeSection = () => {
	const theme = useTheme();

	const [copiedMail, setCopiedMail] = useState(false);
	const [copiedPhone, setCopiedPhone] = useState(false);

	return (
		<Grid
			container
			item
			xs={12}
			marginX={{ xs: "5%", md: "15%", lg: "25%" }}
			sx={{ height: "100vh" }}
		>
			<Grid
				id={"about-section"}
				item
				xs={12}
				display={"flex"}
				sx={{
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					gap: 0.25,
				}}
			>
				<Typography variant="h5" fontWeight={700} color={"secondary.main"}>
					A propos de moi
				</Typography>
				<Typography variant="caption" fontWeight={500} textAlign={"center"}>
					Qui suis-je ?
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Stack
					justifyContent={"center"}
					alignItems={{ xs: "center", md: "flex-start" }}
					spacing={3}
					direction={{ xs: "column", md: "row" }}
				>
					<Card
						sx={{
							width: "25rem",
							borderRadius: "1rem",
							height: "30rem",
							backgroundImage: `url(${String(meFullSize)})`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					/>
					<Stack spacing={2} width={"25rem"} height={"100%"}>
						<Stack
							direction={"row"}
							justifyContent={{ xs: "center", md: "flex-start" }}
							spacing={1}
						>
							<Box width={"30%"}>
								<Card
									sx={{
										background: theme.palette.secondary.dark,
										display: "flex",
										gap: 0.5,
										justifyContent: "center",
										height: "auto",
										p: 1,
									}}
								>
									<PaletteIcon size={18} />
									<Typography alignSelf={"center"} variant="subtitle2">
										Créatif
									</Typography>
								</Card>
							</Box>
							<Box width={"30%"}>
								<Card
									sx={{
										background: theme.palette.secondary.dark,
										display: "flex",
										gap: 0.5,
										justifyContent: "center",
										height: "auto",
										p: 1,
									}}
								>
									<HeartIcon size={18} />
									<Typography alignSelf={"center"} variant="subtitle2">
										Passionné
									</Typography>
								</Card>
							</Box>
							<Box width={"30%"}>
								<Card
									sx={{
										background: theme.palette.secondary.dark,
										display: "flex",
										gap: 0.5,
										justifyContent: "center",
										height: "auto",
										p: 1,
									}}
								>
									<RocketIcon size={18} />
									<Typography alignSelf={"center"} variant="subtitle2">
										Adaptation
									</Typography>
								</Card>
							</Box>
						</Stack>
						<Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
							<Typography
								variant="body2"
								textAlign={"justify"}
								lineHeight={"1.2rem"}
							>
								Depuis mon plus jeune âge, j'ai toujours été passionné par
								l'informatique. Suite à un{" "}
								<span
									style={{
										fontWeight: "bold",
										color: theme.palette.secondary.main,
									}}
								>
									BAC +2{" "}
								</span>
								en
								<span
									style={{
										fontWeight: "bold",
										color: theme.palette.secondary.main,
									}}
								>
									{" "}
									Développement d'Applications{" "}
								</span>
								au sein d'
								<span
									style={{
										fontWeight: "bold",
										fontStyle: "italic",
										color: theme.palette.secondary.main,
									}}
								>
									OpenClassrooms
								</span>
								, ainsi qu'un{" "}
								<span
									style={{
										fontWeight: "bold",
										color: theme.palette.secondary.main,
									}}
								>
									BAC +3{" "}
								</span>{" "}
								en
								<span
									style={{
										fontWeight: "bold",
										color: theme.palette.secondary.main,
									}}
								>
									{" "}
									Conception et Devéloppement{" "}
								</span>
								au sein d'
								<span
									style={{
										fontWeight: "bold",
										fontStyle: "italic",
										color: theme.palette.secondary.main,
									}}
								>
									ISCOD{" "}
								</span>
								à Paris, j'ai acquis les compétences et les connaissances
								necessaires dans le domaine de la conception et du développement
								web.
							</Typography>
							<Typography
								textAlign={"justify"}
								variant="body2"
								lineHeight={"1.2rem"}
							>
								Grace à ces{" "}
								<span
									style={{
										fontWeight: "bold",
										color: theme.palette.secondary.main,
									}}
								>
									connaissances
								</span>
								, j'ai pu mettre en pratique mes{" "}
								<span
									style={{
										fontWeight: "bold",
										color: theme.palette.secondary.main,
									}}
								>
									compétences{" "}
								</span>{" "}
								et mes{" "}
								<span
									style={{
										fontWeight: "bold",
										color: theme.palette.secondary.main,
									}}
								>
									capacités{" "}
								</span>{" "}
								dans le domaine de la conception et du développement web
								<span
									style={{
										fontWeight: "bold",
										color: theme.palette.secondary.main,
									}}
								>
									{" "}
									sur divers projets
								</span>
								.
							</Typography>
							<Typography
								textAlign={"justify"}
								variant="body2"
								lineHeight={"1.2rem"}
							>
								Aujourd'hui, je suis donc{" "}
								<span
									style={{
										fontWeight: "bold",
										color: theme.palette.secondary.main,
									}}
								>
									Développeur Web Fullstack{""}
								</span>
								, que ce soit{" "}
								<span
									style={{
										fontWeight: "bold",
										color: theme.palette.secondary.main,
									}}
								>
									côté client ou serveur
								</span>
								, en utilisant les languages de programmation d'actualité. Ma{" "}
								<span
									style={{
										fontWeight: "bold",
										color: theme.palette.secondary.main,
									}}
								>
									stack technique
								</span>{" "}
								est basée sur l'écosystème
								<span
									style={{
										fontWeight: "bold",
										color: theme.palette.secondary.main,
									}}
								>
									{" "}
									Javascript{" "}
								</span>
								et notamment{" "}
								<span
									style={{
										fontWeight: "bold",
										color: theme.palette.secondary.main,
									}}
								>
									{" "}
									NodeJS
								</span>
								.
							</Typography>
							<Typography
								textAlign={"justify"}
								variant="body2"
								lineHeight={"1.2rem"}
							>
								Je suis donc{" "}
								<span
									style={{
										fontWeight: "bold",
										color: theme.palette.secondary.main,
									}}
								>
									{" "}
									disponible{" "}
								</span>{" "}
								pour toute réalisation de{" "}
								<span
									style={{
										fontWeight: "bold",
										color: theme.palette.secondary.main,
									}}
								>
									{" "}
									vos projets
								</span>
								.
							</Typography>
						</Stack>
						<Stack spacing={1}>
							<Card>
								<CardActionArea
									onClick={() => {
										navigator.clipboard.writeText(
											"grondin.kevin.webdev@gmail.com",
										);
										setCopiedMail(true);

										setTimeout(() => {
											setCopiedMail(false);
										}, 3000);
									}}
									sx={{ p: 1 }}
								>
									<Stack
										direction={"row"}
										justifyContent={"center"}
										alignItems={"center"}
										spacing={1}
										sx={{ height: "20px", position: "relative" }}
									>
										<Box
											sx={{
												position: "absolute",
												opacity: copiedMail ? 1 : 0,
												transform: copiedMail
													? "translateY(0)"
													: "translateY(10px)",
												transition:
													"opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												gap: "8px",
											}}
										>
											<CheckIcon color="green" size={16} />
											<Typography variant="caption">
												Copié dans le presse papier
											</Typography>
										</Box>

										<Box
											sx={{
												opacity: copiedMail ? 0 : 1,
												transform: copiedMail
													? "translateY(-10px)"
													: "translateY(0)",
												transition:
													"opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
												display: "flex",
												justifyContent: "center",

												alignItems: "center",
												gap: "8px",
											}}
										>
											<MailIcon size={16} />
											<Typography variant="caption">
												grondin.kevin.webdev@gmail.com
											</Typography>
										</Box>
									</Stack>
								</CardActionArea>
							</Card>
							<Card>
								<CardActionArea
									onClick={() => {
										navigator.clipboard.writeText("0672611575");
										setCopiedPhone(true);

										setTimeout(() => {
											setCopiedPhone(false);
										}, 3000);
									}}
									sx={{ p: 1 }}
								>
									<Stack
										direction={"row"}
										justifyContent={"center"}
										alignItems={"center"}
										spacing={1}
										sx={{ height: "20px", position: "relative" }}
									>
										<Box
											sx={{
												position: "absolute",
												opacity: copiedPhone ? 1 : 0,
												transform: copiedPhone
													? "translateY(0)"
													: "translateY(10px)",
												transition:
													"opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												gap: "8px",
											}}
										>
											<CheckIcon color="green" size={16} />
											<Typography variant="caption">
												Copié dans le presse papier
											</Typography>
										</Box>

										<Box
											sx={{
												opacity: copiedPhone ? 0 : 1,
												transform: copiedPhone
													? "translateY(-10px)"
													: "translateY(0)",
												transition:
													"opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
												display: "flex",
												justifyContent: "center",

												alignItems: "center",
												gap: "8px",
											}}
										>
											<PhoneIcon size={16} />
											<Typography variant="caption">0672611575</Typography>
										</Box>
									</Stack>
								</CardActionArea>
							</Card>
						</Stack>
					</Stack>
				</Stack>
			</Grid>
		</Grid>
	);
};
