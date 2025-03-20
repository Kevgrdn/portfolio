import {
	Card,
	Divider,
	Link,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import type { FC } from "react";

type SocialCardsProps = {
	title: string;
	icon: React.ReactElement;
	link: string;
};

export const Footer = () => {
	const theme = useTheme();

	const SocialCards: FC<SocialCardsProps> = ({ icon, link, title }) => {
		return (
			<Card
				sx={{
					width: "2rem",
					height: "2rem",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					boxShadow: `0 0 0.2rem ${theme.palette.secondary.dark}`,
					bgcolor: theme.palette.secondary.dark,
					":hover": {
						cursor: "pointer",
						boxShadow: `0 0 0.5rem ${theme.palette.secondary.dark}`,
					},
				}}
				aria-label={title}
			>
				<Link
					sx={{
						m: 0,
						p: 0,
						alignContent: "center",
						alignItems: "center",
						justifyContent: "center",
						display: "flex",
					}}
					href={link}
					target="blank"
				>
					{icon}
				</Link>
			</Card>
		);
	};

	return (
		<Stack>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<title>{""}</title>
				<path
					fill="#FFFFFF"
					fillOpacity="1"
					d="M0,160L20,170.7C40,181,80,203,120,213.3C160,224,200,224,240,197.3C280,171,320,117,360,106.7C400,96,440,128,480,122.7C520,117,560,75,600,90.7C640,107,680,181,720,213.3C760,245,800,235,840,208C880,181,920,139,960,122.7C1000,107,1040,117,1080,112C1120,107,1160,85,1200,106.7C1240,128,1280,192,1320,202.7C1360,213,1400,171,1420,149.3L1440,128L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
				/>
			</svg>
			<Stack
				sx={{
					background: theme.palette.primary.main,
					width: "100%",
					justifyContent: "flex-end",
				}}
			>
				<Stack justifyContent={"center"} p={"2rem"} spacing={2}>
					<Link
						href="https://grondin-kevin.fr"
						sx={{
							textDecoration: "none",
							color: theme.palette.secondary.dark,
						}}
					>
						<Typography
							variant="h6"
							sx={{
								":hover": { textDecoration: "underline" },
								textAlign: "center",
							}}
						>
							by Kévin
						</Typography>
					</Link>
					<Stack direction={"row"} justifyContent={"center"} spacing={1}>
						<SocialCards
							icon={<LinkedinIcon size={18} />}
							link="https://www.linkedin.com/in/k%C3%A9vin-grondin-132848164/"
							title="Linkedin"
						/>
						<SocialCards
							icon={<GithubIcon size={18} />}
							link="https://github.com/Kevgrdn"
							title="Github"
						/>
						<Divider orientation="vertical" flexItem />
						<SocialCards
							icon={<MailIcon size={18} />}
							link="mailto:grondin.kevin.webdev@gmail.com"
							title="Mail"
						/>
						<SocialCards
							icon={<PhoneIcon size={18} />}
							link="tel:+33672611575"
							title="Téléphone"
						/>
					</Stack>
				</Stack>

				<Stack
					direction={{ xs: "column", md: "row" }}
					justifyContent={"center"}
					alignItems={"center"}
					alignContent={"center"}
					gap={1}
					p={1}
					color={theme.palette.secondary.dark}
				>
					<Typography variant="caption" fontWeight={500}>
						© {new Date().getFullYear()} Kévin GRONDIN
					</Typography>
					<Typography variant="caption" fontWeight={500}>
						Tous droits réservés
					</Typography>
					<Link
						variant="caption"
						href="/mentions"
						sx={{
							textDecoration: "none",
							height: "100%",
							fontWeight: 500,
							color: theme.palette.secondary.dark,
							":hover": { textDecoration: "underline" },
						}}
					>
						Mentions légales
					</Link>
				</Stack>
			</Stack>
		</Stack>
	);
};
