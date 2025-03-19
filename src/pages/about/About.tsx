import { Grid, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { AreaOfInterest } from "../../features/About/AreaOfInterest";
import { Description } from "../../features/About/Description";
import { Experience } from "../../features/About/Experience";
import { Formation } from "../../features/About/Formation";

enum EMode {
	FORMATION = "FORMATION",
	EXPERIENCE = "EXPERIENCE",
	CENTRES_D_INTERET = "CENTRES_D_INTERET",
}

export const About = () => {
	const [mode, setMode] = useState<EMode>(EMode.FORMATION);

	return (
		<Grid
			container
			paddingX={{ xs: "5%", md: "15%", lg: "20%" }}
			mt={"5vh"}
			spacing={2}
		>
			<Grid item xs={12}>
				<Description />
			</Grid>
			<Grid item xs={12}>
				<Tabs
					value={mode}
					sx={{ justifySelf: "center" }}
					onChange={(_, v) => setMode(v)}
				>
					<Tab label="Formation" value={EMode.FORMATION} />
					<Tab label="Expérience" value={EMode.EXPERIENCE} />
					<Tab label="Centres d'intérêts" value={EMode.CENTRES_D_INTERET} />
				</Tabs>
			</Grid>
			{mode === EMode.FORMATION && (
				<Grid item xs={12}>
					<Formation />
				</Grid>
			)}
			{mode === EMode.EXPERIENCE && (
				<Grid item xs={12}>
					<Experience />
				</Grid>
			)}
			{mode === EMode.CENTRES_D_INTERET && <AreaOfInterest />}
		</Grid>
	);
};
