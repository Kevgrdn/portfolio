import { Avatar, Stack, Typography, useTheme } from "@mui/material";

export const AboutMe = () => {
	const theme = useTheme();

	return (
		<Stack
			direction={"row"}
			spacing={2}
			sx={{ maxWidth: "40%" }}
			justifyContent={"space-evenly"}
		>
			<Stack justifyContent={"center"} alignContent={"center"}>
				<Avatar
					src="/src/assets/me.jpg"
					sx={{
						height: "13rem",
						width: "13rem",
						border: `5px solid ${theme.palette.primary.main} `,
					}}
				/>
			</Stack>

			<Stack sx={{ overflowX: "hidden" }} justifyContent={"space-evenly"}>
				<Stack justifyContent={"flex-start"}>
					<Typography
						variant="h4"
						sx={{ fontWeight: "600", alignSelf: "self-start" }}
					>
						Kévin Grondin,
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
						Développeur web fullstack
					</Typography>
					<Typography
						variant="body2"
						sx={{
							fontWeight: "400",
							textAlign: "start",
						}}
						textAlign={"justify"}
					>
						Passionné par le développement web et les nouvelles technologies, je
						conçois et développe des applications web modernes et performantes.
						Mon approche combine créativité technique et sens du détail pour
						créer des expériences utilisateur exceptionnelles.{" "}
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
};
