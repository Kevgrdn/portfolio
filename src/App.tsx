import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/pacifico"; // Importe la police Pacifico

import { CssBaseline, Stack, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./layout/footer/Footer";
import { Navbar } from "./layout/navbar/Navbar";
export type language = "FR" | "EN";

function App() {
	// const [language, setLanguage] = useState<language>("FR");
	//   const theme = useTheme();

	const [mode, setMode] = useState<"light" | "dark">("light");

	const theme = createTheme({
		palette: {
			primary: {
				main: "#FFFFFF", // Vert turquoise
			},
			secondary: {
				main: "#F4F4F4", // Jaune sable
			},
			error: {
				main: "#E76F51", // Rouge corail
			},
			warning: {
				main: "#F4A261", // Orange
			},
			info: {
				main: "#264653", // Bleu foncé
			},
			background: {
				paper: "#F4F4F4", // Blanc légèrement gris
				default:
					"linear-gradient(to bottom right, rgb(83, 140, 247),rgb(194, 45, 181))",
			},
			text: {
				primary: "white", // Bleu foncé pour le texte
				secondary: "white", // Vert turquoise pour les accents
				disabled: "grey", // Gris clair pour les textes non actifs
			},
		},
		components: {
			MuiCard: {
				styleOverrides: {
					root: {
						background: "rgba(255, 233, 233, 0.2)",
						borderRadius: "16px",
						boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
						backdropFilter: "blur(5px)",
						webkitBackdropFilter: "blur(5px)",
						border: "1px solid rgba(255, 233, 233, 0.3)",
						padding: "2rem",
						":hover": {
							boxShadow: "0px 0px 8px 0px #FFFFFF",
						},
					},
				},
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Stack
				height={1}
				width={1}
				sx={{ background: theme.palette.background.default }}
			>
				<Stack
					sx={{
						position: "sticky",
						top: 0,
						height: "calc(5vh)",
						width: "100%",
					}}
				>
					<Navbar setMode={setMode} />
				</Stack>
				<Stack
					sx={{
						height: "calc(90vh)",
						overflow: "auto",
						width: "100%",
					}}
				>
					<Outlet />
				</Stack>
				<Stack
					sx={{
						height: "calc(5vh)",
						width: "100%",
					}}
				>
					<Footer />
				</Stack>
			</Stack>
		</ThemeProvider>
	);
}

export default App;
