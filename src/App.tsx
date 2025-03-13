import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/pacifico"; // Importe la police Pacifico

import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Navbar } from "./layout/navbar/Navbar";
import { HomePageV2 } from "./pages/home/HomePageV2";
import { Footer } from "./layout/footer/Footer";
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
				paper: "rgb(244, 244, 244)",
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
			// MuiCard: {
			// 	styleOverrides: {
			// 		root: {
			// 			background: "rgba(255, 233, 233, 0.2)",
			// 			borderRadius: "16px",
			// 			boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
			// 			backdropFilter: "blur(5px)",
			// 			webkitBackdropFilter: "blur(5px)",
			// 			border: "1px solid rgba(255, 233, 233, 0.3)",
			// 			padding: "2rem",
			// 			":hover": {
			// 				boxShadow: "0px 0px 8px 0px #FFFFFF",
			// 			},
			// 		},
			// 	},
			// },
			MuiTypography: {
				styleOverrides: {
					root: {
						lineHeight: 1,
						textAlign: "left",
					},
				},
			},
			MuiStepIcon: {
				styleOverrides: {
					root: {
						"&$active": {
							fill: "white",
							"& $text": {
								fill: "#034691",
							},
						},
					},
					text: {
						fill: "#D3D3D3",
						display: "none",
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
				<HomePageV2 />
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>
				<span>1</span>

				<Footer />
			</Box>
		</ThemeProvider>
	);
}

export default App;
