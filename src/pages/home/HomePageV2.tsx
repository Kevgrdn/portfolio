import { Grid, Stack } from "@mui/material";
import { AboutMeSection } from "../../features/Home/about/AboutMeSection";
import { HomeSection } from "../../features/Home/HomeSection";
import { SkillsSection } from "../../features/Home/SkillsSection";
import { BouncingMouse } from "../../components/ui/BouncingMouse";
import { useIsMobile } from "../../hooks/useIsMobile";

export const HomePageV2 = () => {
	const isMobile = useIsMobile();

	return (
		<Stack marginX={{ xs: "5%", md: "15%", lg: "20%" }}>
			<Grid container height={"100vh"}>
				<HomeSection />
			</Grid>
			<Grid
				id={"about-section"}
				container
				my={"3rem"}
				{...(!isMobile && { height: "100vh" })}
				sx={{ pb: !isMobile ? "12rem" : 0 }}
				spacing={2}
			>
				<AboutMeSection />
			</Grid>
			<Grid container spacing={2} id={"skills-section"}>
				<SkillsSection />
			</Grid>
			{!isMobile && <BouncingMouse />}
		</Stack>
	);
};
