import { Card, Grid, Typography, useTheme } from "@mui/material";
import type { FC } from "react";

type SkillCardProps = {
	icon: React.ReactNode;
	title: string;
};

export const SkillCard: FC<SkillCardProps> = ({ icon, title }) => {
	const theme = useTheme();
	return (
		<Grid
			item
			xs={12}
			md={4}
			lg={3}
			key={title}
			sx={{
				animation: "fadeIn 0.5s ease-out",
			}}
		>
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
		</Grid>
	);
};
