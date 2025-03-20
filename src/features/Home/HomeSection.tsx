import {
	Avatar,
	Button,
	Grid,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { ArrowDownIcon, CloudDownloadIcon } from "lucide-react";
import CV from "../../assets/files/CV.pdf";
import me from "../../assets/me.jpg";
import { useIsMobile } from "../../hooks/useIsMobile";

export const HomeSection = () => {
	const theme = useTheme();

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = CV;
		link.download = "CV_Grondin_Kevin.pdf";
		link.click();
	};

	const isMobile = useIsMobile();
	return (
		<Grid item xs={12}>
			<Stack
				direction={"row"}
				alignItems={"center"}
				justifyContent={"center"}
				height={"100%"}
				spacing={2}
				position={"relative"}
			>
				{!isMobile && (
					<Stack
						flexGrow={1}
						justifyContent={"center"}
						alignItems={{ xs: "center", md: "flex-end" }}
					>
						<Avatar
							src={me}
							sx={{
								height: "30vh",
								width: "30vh",
								border: `5px solid ${theme.palette.secondary.main} `,
							}}
						/>
					</Stack>
				)}
				<Stack
					flexGrow={2}
					spacing={4}
					alignItems={{ xs: "center", lg: "flex-start" }}
					justifyContent={"center"}
				>
					{isMobile && (
						<Avatar
							src={me}
							sx={{
								height: "30vh",
								width: "30vh",
								border: `5px solid ${theme.palette.secondary.main} `,
							}}
						/>
					)}
					<Stack className="presentation-text" spacing={1}>
						<Typography
							textAlign={{ xs: "center", md: "start" }}
							fontSize={{ xs: 50, sm: 96 }}
							py={1}
							fontWeight={700}
						>
							Bienvenue,
						</Typography>
						<Stack
							spacing={0.5}
							textAlign={{ xs: "center", md: "start" }}
							alignItems={{ xs: "center", lg: "flex-start" }}
						>
							<Typography fontSize={{ xs: 20, sm: 32 }} fontWeight={500}>
								Je suis Kévin Grondin
							</Typography>
							<Typography
								textAlign={{ xs: "center", md: "start" }}
								fontSize={{ xs: 30, sm: 48, md: 45 }}
								color={theme.palette.secondary.main}
								fontWeight={700}
							>
								Développeur Fullstack
							</Typography>
						</Stack>
					</Stack>
					<Stack
						className="presentation-buttons"
						direction={{ xs: "column", sm: "row" }}
						justifyContent={{ xs: "center", lg: "flex-start" }}
						width={{ xs: 1, sm: "auto" }}
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
							}}
							onClick={() => handleDownload()}
						>
							Télécharger le CV
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</Grid>
	);
};
