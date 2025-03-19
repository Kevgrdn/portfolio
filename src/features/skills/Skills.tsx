import { useState } from "react";
import { backStack, frontStack, otherStack } from "../../data/Stack";
import { SkillCard } from "../../components/Skillcard";
import { Grid, Stack, Tab, Tabs, Typography } from "@mui/material";

export const Skills = () => {
	enum ETab {
		FRONT = "Front-end",
		BACK = "Back-end",
		OTHER = "Autres",
	}

	const [tab, setTab] = useState<ETab>(ETab.FRONT);

	return (
		<>
			<Grid item xs={12} mt={"5vh"}>
				<Stack justifyContent={"center"} alignItems={"center"} spacing={2}>
					<Stack spacing={0.5} justifyContent={"center"} alignItems={"center"}>
						<Typography variant="h5" fontWeight={700} color={"secondary.main"}>
							Mes compétences
						</Typography>
						<Typography
							variant="caption"
							fontWeight={400}
							textAlign={"center"}
							maxWidth={"25rem"}
						>
							Voici un aperçu des technologies et outils que j'utilise
							régulièrement, et dans lesquels je suis le plus à l'aise.
						</Typography>
					</Stack>
					<Tabs value={tab} onChange={(_, v) => setTab(v)}>
						<Tab label="Front-end" value={ETab.FRONT} />
						<Tab label="Back-end" value={ETab.BACK} />
						<Tab label="Autres" value={ETab.OTHER} />
					</Tabs>
				</Stack>
			</Grid>

			{tab === ETab.FRONT &&
				frontStack.map(({ icon, title }) => (
					<SkillCard icon={icon} title={title} key={title} />
				))}
			{tab === ETab.BACK &&
				backStack.map(({ icon, title }) => (
					<SkillCard icon={icon} title={title} key={title} />
				))}

			{tab === ETab.OTHER &&
				otherStack.map(({ icon, title }) => (
					<SkillCard icon={icon} title={title} key={title} />
				))}
		</>
	);
};
