import {
	Box,
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
import {
	ExternalLinkIcon,
	Github,
	LinkedinIcon,
	MailIcon,
	PhoneIcon,
} from "lucide-react";

export const HomeContact = () => {
	const iconSize = 20;

	const theme = useTheme();

	const SocialIcon = ({
		title,
		Icon,
	}: { title: string; Icon: React.ReactElement }) => {
		return (
			<Tooltip title={title}>
				<Stack
					sx={{
						p: 0.5,
						borderRadius: "0.5rem",
						":hover": {
							cursor: "pointer",
							boxShadow: "0 0 10px #FFFFFF",
							backgroundColor: "white",
							color:
								"linear-gradient(to bottom right, rgb(83, 140, 247),rgb(194, 45, 181))",
						},
					}}
				>
					{Icon}
				</Stack>
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
						title="Voir le profil Linkedin"
						Icon={<LinkedinIcon size={iconSize} />}
					/>
					<SocialIcon
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
						Icon={<MailIcon size={iconSize} />}
					/>
					<SocialIcon
						title="Contacter par téléphone"
						Icon={<PhoneIcon size={iconSize} />}
					/>
				</Stack>
			</CardContent>
		</Card>
	);
};
