import {
	Card,
	CardContent,
	CardHeader,
	Divider,
	Link,
	Stack,
	Tooltip,
	Typography,
	useTheme,
} from "@mui/material";
import { Github, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";

export const HomeContact = () => {
	const iconSize = 20;

	const theme = useTheme();

	const SocialIcon = ({
		title,
		Icon,
		link,
	}: { title: string; Icon: React.ReactElement; link: string }) => {
		return (
			<Tooltip title={title}>
				<Link href={link} target="blank">
					<Stack
						sx={{
							p: 0.5,
							borderRadius: "0.5rem",
							":hover": {
								cursor: "pointer",
								boxShadow: "0 0 1rem #FFFFFF",
								color:
									"linear-gradient(to bottom right, rgb(83, 140, 247),rgb(194, 45, 181))",
							},
						}}
					>
						{Icon}
					</Stack>
				</Link>
			</Tooltip>
		);
	};

	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: "column",
				p: 1,
				flexGrow: 1,
				height: "100%",
				width: "50%",
			}}
		>
			<CardHeader
				title={
					<Stack direction={"row"} spacing={0.25} alignItems={"center"}>
						<Typography alignSelf={"start"} variant="body1" fontWeight="600">
							Me contacter
						</Typography>
						<MailIcon size={16} color={theme.palette.primary.main} />
					</Stack>
				}
				subheader={"Pour plus de renseignements"}
				subheaderTypographyProps={{
					variant: "caption",
					textAlign: "start",
				}}
			/>
			<CardContent>
				<Stack spacing={0.5} direction={"row"} justifyContent={"space-evenly"}>
					<SocialIcon
						link="https://www.linkedin.com/in/k%C3%A9vin-grondin-132848164/"
						title="Voir le profil Linkedin"
						Icon={<LinkedinIcon size={iconSize} />}
					/>
					<SocialIcon
						link="https://github.com/Kevgrdn"
						title="Voir le profil Github"
						Icon={<Github size={iconSize} />}
					/>

					<Divider
						orientation="vertical"
						sx={{ backgroundColor: "white" }}
						flexItem
					/>

					<SocialIcon
						title="Contacter par mail"
						link="/contact"
						Icon={<MailIcon size={iconSize} />}
					/>
					<SocialIcon
						link="/contact"
						title="Contacter par téléphone"
						Icon={<PhoneIcon size={iconSize} />}
					/>
				</Stack>
			</CardContent>
		</Card>
	);
};
