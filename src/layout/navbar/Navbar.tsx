import {
	Box,
	Card,
	CardActionArea,
	Grid,
	Link,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { CustomLink } from "../../components/CustomLink";
import { CheckIcon, MailIcon } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
	const theme = useTheme();

	const [copied, setCopied] = useState<boolean>(false);

	return (
		<AppBar
			sx={{
				backgroundColor: theme.palette.background.default,
				zIndex: 1,
			}}
		>
			<Toolbar
				sx={{
					background: "inherit",
					backgroundColor: theme.palette.background.default,
					border: "none",
					zIndex: 1,
					boxShadow: "1px white",
					position: "sticky",
				}}
			>
				<Grid container spacing={2} alignItems={"center"}>
					<Grid item xs={4}>
						<Link
							href="/"
							sx={{
								textDecoration: "none",
								fontFamily: "Pacifico",
								":hover": {
									textShadow:
										"0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 30px #FFFFFF",
								},
							}}
							variant="h5"
						>
							Grondin Kévin
						</Link>
					</Grid>
					<Grid item xs={4}>
						<Stack
							direction={"row"}
							justifyContent={"center"}
							alignItems={"center"}
							spacing={2}
						>
							<CustomLink href="/" title="Home" />
							<CustomLink href="/about" title="A propos" />
							<CustomLink href="/competences" title="Compétences" />
						</Stack>
					</Grid>
					<Grid item xs={4}>
						<Stack>
							<Card
								sx={{
									display: "inline-block",
									alignSelf: "end",
								}}
							>
								<CardActionArea
									onClick={() => {
										navigator.clipboard.writeText(
											"grondin.kevin.webdev@gmail.com",
										);
										setCopied(true);

										setTimeout(() => {
											setCopied(false);
										}, 3000);
									}}
									sx={{ p: 1 }}
								>
									<Stack
										direction={"row"}
										justifyContent={"center"}
										alignItems={"center"}
										spacing={1}
										sx={{ height: "20px", position: "relative" }}
									>
										<Box
											sx={{
												position: "absolute",
												opacity: copied ? 1 : 0,
												transform: copied
													? "translateY(0)"
													: "translateY(10px)",
												transition:
													"opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												gap: "8px",
											}}
										>
											<CheckIcon color="green" size={16} />
											<Typography variant="caption">
												Copié dans le presse papier
											</Typography>
										</Box>

										<Box
											sx={{
												opacity: copied ? 0 : 1,
												transform: copied
													? "translateY(-10px)"
													: "translateY(0)",
												transition:
													"opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
												display: "flex",
												justifyContent: "center",

												alignItems: "center",
												gap: "8px",
											}}
										>
											<MailIcon size={16} />
											<Typography variant="caption">
												grondin.kevin.webdev@gmail.com
											</Typography>
										</Box>
									</Stack>
								</CardActionArea>
							</Card>
						</Stack>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
