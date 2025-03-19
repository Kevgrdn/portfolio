import { Grid } from "@mui/material";
import { AboutMeSection } from "../../features/Home/AboutMeSection";
import { HomeSection } from "../../features/Home/HomeSection";
import { SkillsSection } from "../../features/Home/SkillsSection";
import { BouncingMouse } from "../../components/ui/BouncingMouse";

export const HomePageV2 = () => {
	return (
		<Grid container spacing={6}>
			<Grid
				item
				xs={12}
				height={"100vh"}
				marginX={{ xs: "5%", md: "15%", lg: "25%" }}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<HomeSection />
			</Grid>
			<AboutMeSection />
			<SkillsSection />

			<BouncingMouse />
		</Grid>
	);
};
