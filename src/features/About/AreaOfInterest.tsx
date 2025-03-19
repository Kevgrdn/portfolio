import { Card, Grid, Stack, Typography, useTheme } from "@mui/material";
import { interest } from "../../data/CenterOfInterest";

export const AreaOfInterest = () => {
	const theme = useTheme();

	return interest.map(({ icon, description, subtitle, title }) => (
		<Grid item xs={12} md={6} key={title}>
			<Card
				sx={{
					display: "flex",
					height: "auto",
					direction: "row",
					p: "1rem",
					gap: 2,
					border: `1px solid ${theme.palette.background.paper}`,
					borderRadius: "0.5rem",
					boxShadow: `1px 1px 1px 1px solid ${theme.palette.background.paper} `,
					alignItems: "center",
					animation: "fadeIn 0.5s ease-out",

					transition: "transform 0.3s ease, box-shadow 0.3s ease",

					"&:hover": {
						transform: "translateY(-5px) scale(1.05)",
						boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
					},
					background: theme.palette.background.paper,
				}}
			>
				<Stack spacing={2}>
					<Stack direction={"row"} spacing={1}>
						{icon}
						<Stack>
							<Typography
								color={theme.palette.secondary.light}
								fontWeight={700}
							>
								{title}
							</Typography>
							{!!subtitle && (
								<Typography variant="caption">{subtitle}</Typography>
							)}
						</Stack>
					</Stack>
					<Typography variant="caption" lineHeight={1.2}>
						{description}{" "}
					</Typography>
				</Stack>
			</Card>
		</Grid>
	));
};
