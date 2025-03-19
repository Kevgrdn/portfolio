import { Description } from "@mui/icons-material";
import { Grid } from "@mui/material";

export const Legal = () => {
	return (
		<Grid
			container
			paddingX={{ xs: "5%", md: "15%", lg: "25%" }}
			mt={"5vh"}
			spacing={2}
		>
			<Grid item xs={12}>
				<Description />
			</Grid>
			<Grid item xs={12}>
				cc
			</Grid>
		</Grid>
	);
};
