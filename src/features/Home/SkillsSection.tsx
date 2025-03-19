import { Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { SkillCard } from "../../components/Skillcard";
import { backStack, frontStack, otherStack } from "../../data/Stack";

enum ETab {
	FRONT = "Front-end",
	BACK = "Back-end",
	OTHER = "Autres",
}

export const SkillsSection = () => {
	const [tab, setTab] = useState<ETab>(ETab.FRONT);

	return (
		<>
			<Grid item xs={12}>
				<Stack justifyContent={"center"} alignItems={"center"} spacing={0.5}>
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
			</Grid>

			<Grid
				item
				xs={12}
				sx={{
					display: "flex",
					direction: "row",
					justifyContent: "center",
				}}
			>
				<Tabs value={tab} onChange={(_, v) => setTab(v)}>
					<Tab label="Front-end" value={ETab.FRONT} />
					<Tab label="Back-end" value={ETab.BACK} />
					<Tab label="Autres" value={ETab.OTHER} />
				</Tabs>
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
