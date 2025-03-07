import {
	Card,
	CardContent,
	CardHeader,
	Stack,
	Typography,
} from "@mui/material";
import { MailIcon, PhoneIcon } from "lucide-react";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import { useState } from "react";

export const HomeContact = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Card
			sx={{
				boxShadow: "none",
				backgroundColor: "#F7F8F9",
				borderRadius: "1rem",
				flexGrow: 1,
				":hover": {
					boxShadow: "0px 0px 10px 0px #E1E2E3",
				},
			}}
		>
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
						<MailIcon size={16} color="#8DDEAC" />
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
				<Stack spacing={0.5} direction={"row"}>
					<img
						src={linkedin}
						alt="linkedin"
						width={24}
						height={24}
						style={{
							cursor: isHovered ? "pointer" : "default", // change le curseur au survol
							opacity: isHovered ? 0.7 : 1, // effet visuel au survol (par exemple, rendre l'icône légèrement transparente)
						}}
						onMouseEnter={() => setIsHovered(true)} // active le hover
						onMouseLeave={() => setIsHovered(false)} // désactive le hover
					/>
					<img src={github} alt="github" width={24} height={24} />
					<MailIcon width={24} height={24} />
					<PhoneIcon width={24} height={24} />
				</Stack>
			</CardContent>
		</Card>
	);
};
