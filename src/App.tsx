import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/pacifico"; // Importe la police Pacifico

import {
	Box,
	CssBaseline,
	Stack,
	ThemeProvider,
	Typography,
	createTheme,
} from "@mui/material";
import { MouseIcon } from "lucide-react";
import { Outlet } from "react-router-dom";
import { Footer } from "./layout/footer/Footer";
import { Navbar } from "./layout/navbar/Navbar";
export type language = "FR" | "EN";

function App() {
	// const [language, setLanguage] = useState<language>("FR");
	//   const theme = useTheme();

	// const [mode, setMode] = useState<"light" | "dark">("light");

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
				main: "rgb(231, 111, 81)", // Rouge corail
				light: "rgb(244, 244, 244)",
			},
			warning: {
				main: "rgb(242, 164, 97)", // Orange
				light: "rgb(244, 244, 244)",
			},
			info: {
				main: "rgb(38, 70, 83)", // Bleu foncé
			},
			background: {
				// PAPER = Bg des cards, dialog etc
				paper: "rgb(37,37,37)",
				// Default === bg par défaut de l'app
				default:
					// "linear-gradient(to bottom right, rgb(83, 140, 247), rgb(194, 45, 181))",
					"rgb(31, 31, 31)",
			},
			text: {
				primary: "rgb(255, 255, 255)", // Blanc pour le texte
				secondary: "rgb(255, 255, 255)", // Blanc pour les accents
				disabled: "rgb(128, 128, 128)", // Gris clair pour les textes non actifs
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
				<Stack
					direction={"row"}
					sx={{
						bottom: "8%",
						right: "15%",
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
			</Box>
		</ThemeProvider>
	);
}

export default App;
