import { Avatar, Card, Grid, Stack, Typography, styled } from "@mui/material";

import { BriefcaseBusinessIcon } from "lucide-react";
import css from "../../assets/stackIcons/css-3.png";
import express from "../../assets/stackIcons/expres.png";
import figma from "../../assets/stackIcons/figma.png";
import git from "../../assets/stackIcons/git.png";
import html from "../../assets/stackIcons/html5.png";
import js from "../../assets/stackIcons/js.png";
import mongo from "../../assets/stackIcons/mongo.png";
import mysql from "../../assets/stackIcons/mysql.png";
import nodejs from "../../assets/stackIcons/nodejs.png";
import pg from "../../assets/stackIcons/pg.png";
import react from "../../assets/stackIcons/react.png";
import ts from "../../assets/stackIcons/ts.png";
import vsp from "../../assets/stackIcons/visual paradigm.png";
import vscode from "../../assets/stackIcons/vscode.png";
import { HomeCompetences } from "../../features/Home/Competences";
import { HomeContact } from "../../features/Home/Contact";

export const HomePage = () => {
	const icons = [
		{ id: 1, icon: css, alt: "CSS" },
		{ id: 5, icon: html, alt: "HTML" },
		{ id: 6, icon: js, alt: "Javascript" },
		{ id: 12, icon: ts, alt: "Typescript" },
		{ id: 9, icon: nodejs, alt: "NodeJS" },
		{ id: 11, icon: react, alt: "React" },
		{ id: 2, icon: express, alt: "Express" },
		{ id: 3, icon: figma, alt: "Figma" },
		{ id: 4, icon: git, alt: "Git" },
		{ id: 7, icon: mongo, alt: "MongoDB" },
		{ id: 8, icon: mysql, alt: "MySQL" },
		{ id: 10, icon: pg, alt: "PostgreSQL" },
		{ id: 13, icon: vsp, alt: "Visual Paradigm" },
		{ id: 14, icon: vscode, alt: "Visual Studio Code" },
	];

	const ScrollStack = styled(Stack)`
	overflow-x: hidden;
	white-space: nowrap;
	animation: scroll-left 10s linear infinite;
	:hover {
		animation-play-state: paused;
	}
  
	@keyframes scroll-left {
	  0% {
		transform: translateX(100%);
	  }
	  100% {
		transform: translateX(-100%);
	  }
	}
  `;

	return (
		<Stack width={1} height={1} justifyContent={"center"} alignItems={"center"}>
			<Stack sx={{ width: "75%" }}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<Card
							sx={{
								backgroundColor: "#F7F8F9",
								borderRadius: "1rem",
								padding: "3rem",
								boxShadow: "none",
							}}
						>
							<Stack
								direction={"row"}
								spacing={2}
								justifyContent={"space-evenly"}
							>
								<Stack justifyContent={"center"} alignContent={"center"}>
									<Avatar
										src="/src/assets/me.jpg"
										sx={{
											height: "10rem",
											width: "10rem",
											border: "5px solid #8DDEAC ",
										}}
									/>
								</Stack>

								<Stack
									sx={{ overflowX: "hidden" }}
									justifyContent={"space-between"}
								>
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
										<Stack direction={"row"} justifyContent={"center"}>
											<Typography
												variant="body2"
												sx={{
													fontWeight: "400",
													color: "grey",
													textAlign: "start",
												}}
											>
												Je suis un développeur d'applications basé en Indre et
												Loire.
											</Typography>
										</Stack>
									</Stack>
									<ScrollStack direction={"row"} spacing={1}>
										{icons.map(({ icon, id, alt }) => (
											<img
												src={icon}
												key={id}
												alt={alt}
												style={{ height: "2rem" }}
											/>
										))}
									</ScrollStack>
								</Stack>
							</Stack>
						</Card>
					</Grid>
					<Grid item xs={12} md={6}>
						<Stack spacing={3}>
							<Card
								sx={{
									boxShadow: "none",
									backgroundColor: "#F7F8F9",
									borderRadius: "1rem",
									px: "3rem",
									py: "1.5rem",
								}}
							>
								<ScrollStack direction={"row"} spacing={1}>
									<Typography variant="body2" fontWeight={700}>
										Je suis actuellement disponible pour toute mission de
										<span
											style={{
												color: "#8DDEAC",
											}}
										>
											&nbsp;freelance
										</span>
										.
									</Typography>
									<BriefcaseBusinessIcon size={16} />
								</ScrollStack>
							</Card>
							<Stack direction={"row"} spacing={3}>
								<Card
									sx={{
										boxShadow: "none",
										backgroundColor: "#F7F8F9",
										borderRadius: "1rem",
										padding: "3rem",
										flexGrow: 1,
									}}
								>
									2
								</Card>
								<HomeContact />
							</Stack>
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<HomeCompetences />
					</Grid>
				</Grid>
			</Stack>
		</Stack>
	);
};
