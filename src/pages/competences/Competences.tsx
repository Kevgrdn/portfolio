import { Card, Stack, Typography } from "@mui/material";

export const Competences = () => {
	return (
		<Stack
			width={1}
			height={1}
			justifyContent={"flex-start"}
			alignItems={"center"}
		>
			<Stack spacing={0.5}>
				<Typography variant="h5" sx={{ textAlign: "center", fontWeight: 700 }}>
					Mes compétences
				</Typography>
				<Typography variant="body2">
					Voici un aperçu de ma stack technique
				</Typography>
			</Stack>
		</Stack>
	);
};
