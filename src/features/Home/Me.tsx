import { Avatar, Card, Stack, Typography, useTheme } from "@mui/material";

export const HomeMeCard = () => {
	const theme = useTheme();

	return (
		<Card sx={{ height: "100%" }}>
			<Stack direction={"row"} spacing={2} justifyContent={"space-evenly"}>
				<Stack justifyContent={"center"} alignContent={"center"}>
					<Avatar
						src="/src/assets/me.jpg"
						sx={{
							height: "10rem",
							width: "10rem",
							border: `5px solid ${theme.palette.primary.main} `,
						}}
					/>
				</Stack>

				<Stack sx={{ overflowX: "hidden" }} justifyContent={"space-evenly"}>
					<Stack justifyContent={"flex-start"}>
						<Typography
							variant="h6"
							sx={{ fontWeight: "400", alignSelf: "self-start" }}
						>
							Bienvenue👋
						</Typography>
						<Typography
							variant="h5"
							sx={{ fontWeight: "600", alignSelf: "self-start" }}
						>
							Je suis Kévin Grondin,
						</Typography>
						<Typography
							variant="h5"
							sx={{
								fontWeight: "400",
								overflow: "hidden",
								alignSelf: "self-start",
							}}
							className={"typewriter"}
							width={"auto"}
						>
							Développeur fullstack
						</Typography>
						<Stack direction={"row"}>
							<Typography
								variant="body2"
								sx={{
									fontWeight: "400",
									textAlign: "start",
								}}
							>
								Je suis un développeur d'applications basé en Indre et Loire.
							</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Card>
	);
};
