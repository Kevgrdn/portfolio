import { Avatar, Stack, Typography, useTheme } from "@mui/material";
import me from "../../assets/me.jpg";

export const Description = () => {
	const theme = useTheme();

	return (
		<Stack
			direction={{ xs: "column", md: "row" }}
			justifyContent={{ xs: "center" }}
			alignItems={{ xs: "center" }}
			spacing={2}
		>
			<Stack justifyContent={"center"} alignContent={"center"}>
				<Avatar
					src={me}
					sx={{
						height: "13rem",
						width: "13rem",
						border: `5px solid ${theme.palette.secondary.main} `,
					}}
				/>
			</Stack>
			<Stack spacing={2}>
				<Stack spacing={0.5} alignItems={{ xs: "center", md: "flex-start" }}>
					<Typography variant="h4" sx={{ fontWeight: "600" }}>
						Kévin Grondin,
					</Typography>
					<Stack direction={"row"} spacing={1}>
						<Typography
							variant="h5"
							sx={{
								overflow: "hidden",
							}}
							color={theme.palette.secondary.main}
							fontWeight={600}
							width={"auto"}
						>
							Développeur web fullstack
						</Typography>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1.5rem"
							height="1.5rem"
							viewBox="0 0 36 36"
						>
							<title>Rocket icon</title>
							<path
								fill="#a0041e"
								d="m1 17l8-7l16 1l1 16l-7 8s.001-5.999-6-12s-12-6-12-6"
							/>
							<path
								fill="#ffac33"
								d="M.973 35s-.036-7.979 2.985-11S15 21.187 15 21.187S14.999 29 11.999 32S.973 35 .973 35"
							/>
							<circle cx={8.999} cy={27} r={4} fill="#ffcc4d" />
							<path
								fill="#55acee"
								d="M35.999 0s-10 0-22 10c-6 5-6 14-4 16s11 2 16-4c10-12 10-22 10-22"
							/>
							<path d="M26.999 5a4 4 0 0 0-3.641 2.36A4 4 0 0 1 24.999 7a4 4 0 0 1 4 4c0 .586-.133 1.139-.359 1.64A3.99 3.99 0 0 0 30.999 9a4 4 0 0 0-4-4" />
							<path
								fill="#a0041e"
								d="M8 28s0-4 1-5s13.001-10.999 14-10s-9.001 13-10.001 14S8 28 8 28"
							/>
						</svg>
					</Stack>
				</Stack>
				<Typography
					variant="body2"
					textAlign={{ xs: "center", md: "justify" }}
					sx={{
						fontWeight: "400",
						textAlign: "start",
						lineHeight: "1rem",
						maxWidth: "30rem",
					}}
				>
					Passionné par le développement web et les nouvelles technologies, je
					conçois et développe des applications web modernes et performantes.
					Mon approche combine créativité technique et sens du détail pour créer
					des expériences utilisateur exceptionnelles.{" "}
				</Typography>
			</Stack>
		</Stack>
	);
};
