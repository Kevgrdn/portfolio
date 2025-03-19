import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/pacifico"; // Importe la police Pacifico

import {
	Box,
	Container,
	CssBaseline,
	ThemeProvider,
	createTheme,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer } from "./layout/footer/Footer";
import { Navbar } from "./layout/navbar/Navbar";
export type language = "FR" | "EN";

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: "rgb(255, 255, 255)",
				dark: "rgb(229, 229, 229)",
			},
			secondary: {
				main: "rgb(205, 178, 142)",
				light: "rgb(226, 196, 156)",
				dark: "rgb(184, 160, 128)",
			},
			error: {
				main: "rgb(231, 111, 81)",
				light: "rgb(244, 244, 244)",
			},
			warning: {
				main: "rgb(242, 164, 97)",
				light: "rgb(244, 244, 244)",
			},
			info: {
				main: "rgb(38, 70, 83)",
			},
			background: {
				paper: "rgb(37,37,37)",
				default: "rgb(31, 31, 31)",
			},
			text: {
				primary: "rgb(255, 255, 255)",
				secondary: "rgb(255, 255, 255)",
				disabled: "rgb(128, 128, 128)",
			},
		},
		typography: {
			button: {
				fontSize: "0.75rem",
				fontWeight: 500,
			},
		},
		components: {
			MuiTypography: {
				styleOverrides: {
					root: {
						lineHeight: 1,
						textAlign: "left",
					},
				},
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box height={"100vh"} overflow={"auto"}>
				<Navbar />

				<Outlet />

				<Footer />
			</Box>
		</ThemeProvider>
	);
}

export default App;
