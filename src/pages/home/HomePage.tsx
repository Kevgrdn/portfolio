import { Card, Grid, Stack, Typography, styled, useTheme } from "@mui/material";

import { BriefcaseBusinessIcon } from "lucide-react";

import { HomeCompetences } from "../../features/Home/Competences";
import { HomeContact } from "../../features/Home/Contact";
import { HomeMeCard } from "../../features/Home/Me";
import { HomeStack } from "../../features/Home/Stack";

export const HomePage = () => {
	const theme = useTheme();

	const ScrollStack = styled(Stack)`
	overflow-x: hidden;
	white-space: nowrap;
	animation: scroll-left 10s linear infinite;
	
	:hover {
		animation-play-state: paused;

		}
  
	@keyframes scroll-left {
	  0% {
		transform: translateX(100%);
	  } 
	  100% {
		transform: translateX(-100%);
	  }
	}
  `;

	return (
		<Stack width={1} height={1} justifyContent={"center"} alignItems={"center"}>
			<Stack sx={{ width: "75%" }}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<HomeMeCard />
					</Grid>
					<Grid item xs={12} md={6}>
						<Stack spacing={2}>
							<Card>
								<ScrollStack direction={"row"} spacing={1}>
									<Typography variant="body2" fontWeight={700}>
										Je suis actuellement disponible pour toute mission de
										<span
											style={{
												color: theme.palette.primary.main,
											}}
										>
											&nbsp;freelance
										</span>
										.
									</Typography>
									<BriefcaseBusinessIcon size={16} />
								</ScrollStack>
							</Card>
							<Stack direction={"row"} spacing={2}>
								<Stack width={"50%"}>
									<HomeStack />
								</Stack>
								<Stack width={"50%"}>
									<HomeContact />
								</Stack>
							</Stack>
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<HomeCompetences />
					</Grid>
				</Grid>
			</Stack>
		</Stack>
	);
};
