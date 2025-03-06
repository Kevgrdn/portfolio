import { Avatar, MenuItem, Select, Typography } from "@mui/material";
import frFlag from "../assets/fr.png";
import enFlag from "../assets/en.png";
import { FC } from "react";
import { Language } from "../interfaces/language";



type Props = {
	language: Language;
};

export const LanguageSelect: FC<Props> = ({ language }) => {
	return (
		<Select size="small" value={language}>
			<MenuItem
				sx={{ display: "flex", direction: "row", alignItems: "center", gap: 1 }}
				value={Language.FR}
			>
				<Avatar src={frFlag} sx={{ height: 24, width: 24 }} />
				<Typography>FR</Typography>
			</MenuItem>
			<MenuItem
				sx={{ display: "flex", direction: "row", alignItems: "center", gap: 1 }}
				value={Language.EN}
			>
				<Avatar src={enFlag} sx={{ height: 24, width: 24 }} />
				<Typography>EN</Typography>
			</MenuItem>
		</Select>
	);
};
