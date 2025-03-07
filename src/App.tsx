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
				main: "#A2D2FF", // Couleur principale
				dark: "#415a77",
				light: "#d5dee8",
			},
			secondary: {
				main: "#eff0ee",
				dark: "#e0e1dd",
				light: "#f9f9f8",
				// Couleur secondaire
			},
			background: {
				default: mode === "dark" ? "#CDB4DB" : "#FFFFFF",
			},
			mode,

			// Autres options de la palette comme error, warning, etc.
		},
		typography: {
			fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: 14,
			// Autres configurations de la typographie
		},
		// Vous pouvez ajouter d'autres configurations comme shadows, spacing, etc.
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
