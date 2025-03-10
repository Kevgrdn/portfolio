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
import { useState } from "react";
import { keyframes } from "@mui/material";

export const HomeContact = () => {
	const iconSize = 20;

	const [isHovered, setIsHovered] = useState(false);

	const fadeIn = keyframes`
0% {
  opacity: 0;
}
  50% {
  opacity: 0.5;
  width: auto
  }
  100% {
	opacity: 1;
	width: auto
}`;

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
						":hover": { cursor: "pointer", backgroundColor: "grey" },
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
				boxShadow: "none",
				backgroundColor: "#F7F8F9",
				borderRadius: "1rem",
				flexGrow: 1,
				position: "relative",
				":hover": {
					boxShadow: `0px 0px 8px 0px ${theme.palette.primary.main}`,
				},
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{isHovered && (
				<Link
					sx={{
						position: "absolute",
						top: 0,
						bgcolor: theme.palette.primary.main,
						right: 0,
						borderRadius: "0 0 0 0.5rem",
						textDecoration: "none",
						animation: `${fadeIn} 0.5s ease-in-out`,
					}}
					href="/contact"
				>
					<Stack direction={"row"} alignItems={"center"} gap={0.5} p={1}>
						<Typography
							variant="caption"
							sx={{ fontWeight: "700" }}
							color={"white"}
						>
							Me contacter
						</Typography>
						<ExternalLinkIcon size={14} color="white" />
					</Stack>
				</Link>
			)}
			<CardHeader
				title={
					<Stack
						direction={"row"}
						alignContent={"center"}
						alignItems={"center"}
						spacing={0.5}
					>
						<Typography alignSelf={"start"} variant="body1" fontWeight="600">
							Me contacter
						</Typography>
						<MailIcon size={16} color={theme.palette.primary.main} />
					</Stack>
				}
				subheader={"Pour plus de renseignements"}
				subheaderTypographyProps={{
					variant: "caption",
					color: "grey",
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

					<Divider orientation="vertical" flexItem />

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
