import { Grid } from "@mui/material";
import { Softskills } from "../../features/skills/Softskills";
import { Skills } from "../../features/skills/Skills";

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
