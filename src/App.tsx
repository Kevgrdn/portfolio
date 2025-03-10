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
				main: "#2A9D8F", // Vert turquoise
			},
			secondary: {
				main: "#E9C46A", // Jaune sable
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
				default: "#FFFFFF",
			},
			text: {
				primary: "#264653", // Bleu foncé pour le texte
				secondary: "#2A9D8F", // Vert turquoise pour les accents
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Stack height={1} width={1}>
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
				<Stack sx={{ height: "calc(90vh)", overflow: "auto", width: "100%" }}>
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
