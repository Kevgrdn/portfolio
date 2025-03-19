import { Grid, Stack, Typography } from "@mui/material";
import { SkillCard } from "../../components/Skillcard";
import { softskill } from "../../data/Softskills";

export const Softskills = () => {
	return (
		<>
			<Grid item xs={12}>
				<Stack justifyContent={"center"} alignItems={"center"} spacing={0.5}>
					<Typography variant="h5" fontWeight={700} color={"secondary.main"}>
						Mes softskills
					</Typography>
					<Typography
						variant="caption"
						fontWeight={400}
						textAlign={"center"}
						maxWidth={"25rem"}
					>
						Attributs personnels
					</Typography>
				</Stack>
			</Grid>
			{softskill.map(({ icon, title }) => (
				<SkillCard icon={icon} title={title} key={title} />
			))}
		</>
	);
};
