import {
	Avatar,
	Button,
	Grid,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import me from "../../assets/me.jpg";
import { ArrowDownIcon, CloudDownloadIcon, MouseIcon } from "lucide-react";

import CV from "../../assets/files/CV.pdf";

export const HomePageV2 = () => {
	const theme = useTheme();

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = CV;
		link.download = "CV_Grondin_Kevin.pdf";
		link.click();
	};

	return (
		<Stack
			width={1}
			height={"100vh"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<Grid container justifyContent={"center"}>
				<Grid item xs={12}>
					<Stack
						direction={"row"}
						spacing={6}
						justifyContent={"center"}
						width={"auto"}
					>
						<Avatar
							src={me}
							sx={{
								height: "20rem",
								width: "20rem",
								border: `5px solid ${theme.palette.secondary.main} `,
							}}
						/>
						<Stack spacing={4}>
							<Stack className="presentation-text" spacing={1}>
								<Typography fontSize={96} py={1} fontWeight={700}>
									Bienvenue,
								</Typography>
								<Stack spacing={0.5}>
									<Typography fontSize={32} fontWeight={500}>
										Je suis Kévin Grondin
									</Typography>
									<Typography
										fontSize={48}
										color={theme.palette.secondary.main}
										fontWeight={700}
									>
										Développeur Fullstack
									</Typography>
								</Stack>
							</Stack>
							<Stack
								className="presentation-buttons"
								direction={"row"}
								justifyContent={"flex-start"}
								spacing={1}
							>
								<Button
									startIcon={
										<ArrowDownIcon
											size={18}
											style={{ animation: "bounce 1s infinite" }}
										/>
									}
								>
									A propos
								</Button>
								<Button
									startIcon={<CloudDownloadIcon size={18} />}
									sx={{
										border: `1px solid ${theme.palette.secondary.main}`,
										borderRadius: "0.5rem",
										color: theme.palette.secondary.main,
										// backgroundColor: theme.palette.secondary.main,
									}}
									onClick={() => handleDownload()}
								>
									Télécharger le CV
								</Button>
							</Stack>
						</Stack>
					</Stack>
				</Grid>
			</Grid>
			<Stack
				direction={"row"}
				sx={{
					bottom: "8%",
					right: "20%",
					transform: "rotate(-90deg)",
					position: "absolute",
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
					Scroll down
				</Typography>
				<MouseIcon
					color={theme.palette.secondary.main}
					style={{
						transform: "rotate(90deg)",
					}}
				/>
			</Stack>
		</Stack>
	);
};
