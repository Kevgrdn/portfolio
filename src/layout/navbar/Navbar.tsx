import {
	Box,
	Card,
	CardActionArea,
	Divider,
	Grid,
	IconButton,
	Link,
	Menu,
	MenuItem,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
	CheckIcon,
	HandshakeIcon,
	HomeIcon,
	MailIcon,
	MenuIcon,
	PhoneIcon,
	UserSearchIcon,
} from "lucide-react";
import { useState } from "react";
import { CustomLink } from "../../components/CustomLink";
import { useIsMobile } from "../../hooks/useIsMobile";

export const Navbar = () => {
	const [copied, setCopied] = useState<boolean>(false);
	const theme = useTheme();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const isMobile = useIsMobile();

	return (
		<AppBar
			sx={{
				backgroundColor: theme.palette.background.default,
				position: "sticky",
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
					<Grid item xs={10} lg={4}>
						<Stack
							spacing={1}
							sx={{
								":hover .portfolio": {
									textShadow:
										"0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 30px #FFFFFF",
								},
							}}
						>
							<Link href="/" sx={{ textDecoration: "none" }}>
								<Typography
									sx={{
										fontFamily: "Pacifico",
									}}
									className="portfolio"
									variant="h5"
								>
									Portfolio
								</Typography>
							</Link>
						</Stack>
					</Grid>
					{!isMobile ? (
						<>
							<Grid item xs={4}>
								<Stack
									direction={"row"}
									justifyContent={"center"}
									alignItems={"center"}
									spacing={3}
								>
									<CustomLink href="/" title="Accueil" />
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
						</>
					) : (
						<Grid item xs={2} display={"flex"} justifyContent={"flex-end"}>
							<IconButton
								onClick={(e) => setAnchorEl(e.currentTarget)}
								size="large"
								edge="start"
								color="inherit"
								aria-label="menu"
							>
								<MenuIcon size={24} color="white" />
							</IconButton>
						</Grid>
					)}
					{isMobile && (
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							sx={{ width: "100vh" }}
							onClose={() => {
								setAnchorEl(null);
							}}
						>
							<MenuItem
								onClick={() => {
									setAnchorEl(null);
								}}
							>
								<CustomLink
									icon={<HomeIcon size={16} />}
									href="/"
									title="Accueil"
								/>
							</MenuItem>
							<MenuItem
								onClick={() => {
									setAnchorEl(null);
								}}
							>
								<CustomLink
									icon={<UserSearchIcon size={16} />}
									href="/about"
									title="A propos"
								/>
							</MenuItem>
							<MenuItem
								onClick={() => {
									setAnchorEl(null);
								}}
							>
								<CustomLink
									icon={<HandshakeIcon size={16} />}
									href="/competences"
									title="Compétences"
								/>
							</MenuItem>
							<Divider />
							<Stack>
								<Typography variant="subtitle2" sx={{ mx: 2 }}>
									Me contacter
								</Typography>
								<MenuItem>
									<Stack
										direction={"row"}
										color={theme.palette.secondary.main}
										spacing={1}
										alignItems={"center"}
									>
										<MailIcon size={16} />
										<Link
											href="mailto:grondin.kevin.webdev@gmail.com"
											sx={{ textDecoration: "none" }}
										>
											<Typography
												color={theme.palette.secondary.main}
												variant="subtitle2"
											>
												grondin.kevin.webdev@gmail.com
											</Typography>
										</Link>
									</Stack>
								</MenuItem>
								<MenuItem>
									<Stack
										direction={"row"}
										spacing={1}
										color={theme.palette.secondary.main}
										alignItems={"center"}
									>
										<PhoneIcon size={16} />
										<Link
											variant="body2"
											href="tel:+33672611575"
											sx={{ textDecoration: "none" }}
										>
											<Typography
												color={theme.palette.secondary.main}
												variant="subtitle2"
											>
												06.72.61.15.75
											</Typography>
										</Link>
									</Stack>
								</MenuItem>
							</Stack>
						</Menu>
					)}
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
