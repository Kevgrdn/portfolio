import { Avatar, Button, Stack, Typography, useTheme } from "@mui/material";
import { ArrowDownIcon, CloudDownloadIcon } from "lucide-react";
import CV from "../../assets/files/CV.pdf";
import me from "../../assets/me.jpg";

export const HomeSection = () => {
	const theme = useTheme();

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = CV;
		link.download = "CV_Grondin_Kevin.pdf";
		link.click();
	};

	return (
		<Stack
			direction={{ xs: "column", md: "row" }}
			spacing={6}
			justifyContent={{ xs: "center", md: "flex-start" }}
			alignItems={{ xs: "center", md: "flex-start" }}
			mx={{ xs: 2, md: 0 }}
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
					<Stack spacing={0.5} alignItems={{ xs: "center", md: "flex-start" }}>
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
					justifyContent={{ xs: "center", md: "flex-start" }}
					spacing={1}
				>
					<Button
						onClick={() => {
							const section = document.getElementById("about-section");
							if (section) {
								section.scrollIntoView({ behavior: "smooth" });
							}
						}}
						variant="outlined"
						sx={{ borderRadius: "0.5rem" }}
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
	);
};
