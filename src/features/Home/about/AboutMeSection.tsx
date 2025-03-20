import { Grid, Stack, Typography } from "@mui/material";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export const AboutMeSection = () => {
	return (
		<>
			<Grid item xs={12} display={"flex"} justifyContent={"center"}>
				<Stack spacing={0.5} alignItems={"center"} justifyContent={"center"}>
					<Typography variant="h5" fontWeight={700} color={"secondary.main"}>
						A propos de moi
					</Typography>
					{/* <Typography variant="caption" fontWeight={500} textAlign={"center"}>
						Kévin GRONDIN
					</Typography> */}
				</Stack>
			</Grid>
			<Grid item xs={12} md={6}>
				<Stack alignItems={"center"}>
					<LeftSide />
				</Stack>
			</Grid>
			<Grid item xs={12} md={6}>
				<RightSide />
			</Grid>
		</>
	);
};
