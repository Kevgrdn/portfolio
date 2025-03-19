import { Grid } from "@mui/material";
import { Skills } from "../../features/skills/Skills";
import { Softskills } from "../../features/skills/Softskills";

export const Competences = () => {
	return (
		<Grid
			container
			paddingX={{ xs: "5%", md: "15%", lg: "20%" }}
			mt={"5vh"}
			spacing={2}
		>
			<Softskills />

			<Skills />
		</Grid>
	);
};
