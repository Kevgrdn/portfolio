import { Card, Stack, Tab, Tabs, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { backStack, frontStack, otherStack } from "../../data/Stack";

enum ETab {
	FRONT = "Front-end",
	BACK = "Back-end",
	OTHER = "Autres",
}

export const SkillsSection = () => {
	const [tab, setTab] = useState<ETab>(ETab.FRONT);

	const theme = useTheme();
	const SkillCard = ({ icon, title }: { icon: JSX.Element; title: string }) => {
		return (
			<Card
				sx={{
					display: "flex",
					direction: "row",
					height: "5rem",
					p: "1rem",
					gap: 2,
					border: `1px solid ${theme.palette.background.paper}`,
					borderRadius: "0.5rem",
					boxShadow: `1px 1px 1px 1px solid ${theme.palette.background.paper} `,
					alignItems: "center",
					transition: "transform 0.3s ease, box-shadow 0.3s ease",

					"&:hover": {
						transform: "translateY(-5px) scale(1.05)",
						boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
					},
					background: theme.palette.background.paper,
				}}
			>
				{icon}
				<Typography
					alignSelf={"center"}
					color={theme.palette.secondary.light}
					fontWeight={700}
				>
					{title}
				</Typography>
			</Card>
		);
	};

	return (
		<Stack spacing={2}>
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
			<Stack spacing={2}>
				<Stack alignItems={"center"}>
					<Tabs value={tab} onChange={(_, v) => setTab(v)}>
						<Tab label="Front-end" value={ETab.FRONT} />
						<Tab label="Back-end" value={ETab.BACK} />
						<Tab label="Autres" value={ETab.OTHER} />
					</Tabs>
				</Stack>
				<Stack spacing={1} direction={"row"} flexWrap={"wrap"}>
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
				</Stack>
			</Stack>
		</Stack>
	);
};
