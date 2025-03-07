import { MenuItem, Select, Typography } from "@mui/material";
import type { FC } from "react";
import enFlag from "../assets/en.png";
import frFlag from "../assets/fr.png";
import { Language } from "../interfaces/language";

type Props = {
	language: Language;
};

export const LanguageSelect: FC<Props> = ({ language }) => {
	const languages = [
		{ code: Language.FR, label: "FR", flag: frFlag },
		{ code: Language.EN, label: "EN", flag: enFlag },
	];

	return (
		<Select size="small" value={language}>
			{languages.map((lang) => (
				<MenuItem
					key={lang.code}
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						gap: 1,
					}}
					value={lang.code}
				>
					{/* <Avatar src={lang.flag} sx={{ height: 24, width: 24 }} /> */}
					<Typography variant="caption">{lang.label}</Typography>
				</MenuItem>
			))}
		</Select>
	);
};
