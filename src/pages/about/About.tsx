import { Button, Stack } from "@mui/material";
import { AboutMe } from "../../features/About/AboutMe";
import { SchoolIcon } from "lucide-react";

export const About = () => {
	return (
		<Stack
			width={1}
			height={1}
			spacing={2}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<AboutMe />
			<Stack
				direction={"row"}
				spacing={2}
				alignItems={"center"}
				alignContent={"center"}
			>
				<Button startIcon={<SchoolIcon size={16} />} color="inherit">
					Formation
				</Button>
				<Button color="inherit">Expérience</Button>
				<Button color="inherit">Centres d'intérêt</Button>
			</Stack>
		</Stack>
	);
};
