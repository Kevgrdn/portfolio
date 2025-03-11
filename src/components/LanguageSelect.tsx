import { Switch, styled } from "@mui/material";
import enFlag from "../assets/en.png";
import frFlag from "../assets/fr.png";

export const LanguageSelect = () => {
	const MaterialUISwitch = styled(Switch)(({ theme }) => ({
		width: 62,
		height: 34,
		padding: 7,
		"& .MuiSwitch-switchBase": {
			margin: 1,
			padding: 0,
			transform: "translateX(6px)",
			"&.Mui-checked": {
				color: "#fff",
				transform: "translateX(22px)",
				"& .MuiSwitch-thumb:before": {
					backgroundSize: "cover",
					backgroundImage: `url(${enFlag})`,
					border: "1px solid white",
					borderRadius: "50%",
				},
				"& + .MuiSwitch-track": {
					opacity: 1,
					backgroundColor: "#aab4be",
					...theme.applyStyles("dark", {
						backgroundColor: "#8796A5",
					}),
				},
			},
		},
		"& .MuiSwitch-thumb": {
			backgroundColor: "#001e3c",
			width: 32,
			height: 32,
			"&::before": {
				content: "''",
				position: "absolute",
				width: "100%",
				height: "100%",
				left: 0,
				top: 0,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundImage: `url(${frFlag})`,
				border: "1px solid white",
				borderRadius: "50%",
			},
		},
		"& .MuiSwitch-track": {
			opacity: 1,
			backgroundColor: "#aab4be",
			borderRadius: 20 / 2,
			...theme.applyStyles("dark", {
				backgroundColor: "#8796A5",
			}),
		},
	}));

	return <MaterialUISwitch />;
};
