import { Stack, Typography, useTheme } from "@mui/material";
import { MouseIcon } from "lucide-react";

export const BouncingMouse = ({ text }: { text?: string }) => {
	const theme = useTheme();

	return (
		<Stack
			direction={"row"}
			sx={{
				bottom: "8%",
				display: { xs: "none", lg: "flex" },
				right: { lg: "5%", xl: "15%" },
				transform: "rotate(-90deg)",
				position: "fixed",
				justifyContent: "center",
				alignItems: "center",
				animation: "verticalBounce 1s infinite",
			}}
			spacing={0.5}
		>
			<span
				style={{
					backgroundColor: theme.palette.secondary.main,
					width: "3rem",
					height: "2px",
				}}
			/>
			<Typography
				variant="caption"
				sx={{
					alignSelf: "center",
					verticalAlign: "center",
				}}
				color={theme.palette.secondary.main}
			>
				{text ? text : "Scroll down"}
			</Typography>
			<MouseIcon
				color={theme.palette.secondary.main}
				style={{
					transform: "rotate(90deg)",
				}}
			/>
		</Stack>
	);
};
