import { Card, useTheme } from "@mui/material";

export const HomeStack = () => {
	const theme = useTheme();
	return (
		<Card
			sx={{
				boxShadow: "none",
				backgroundColor: "#F7F8F9",
				borderRadius: "1rem",
				padding: "3rem",
				flexGrow: 1,
				":hover": {
					boxShadow: `0px 0px 8px 0px ${theme.palette.primary.main}`,
				},
			}}
		>
			2
		</Card>
	);
};
