import { Link, Stack, Switch, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MoonIcon, SunIcon } from "lucide-react";
import * as React from "react";
import { CustomLink } from "../../components/CustomLink";
import { LanguageSelect } from "../../components/LanguageSelect";
import type { Language } from "../../interfaces/language";

type Props = {
	setMode: (mode: "light" | "dark") => void;
};

export const Navbar: React.FC<Props> = ({ setMode }) => {
	const [checked, setChecked] = React.useState(true);

	const theme = useTheme();

	const handleChangeThemeMode = () => {
		const color = theme.palette.mode === "light" ? "dark" : "light";

		setMode(color);
	};

	return (
		<AppBar
			sx={{
				bgcolor: "#FAFAFA",
				border: "none",
				boxShadow: "none",
			}}
		>
			<Toolbar>
				<Stack
					direction={"row"}
					alignItems={"center"}
					justifyContent={"space-between"}
					width={"100%"}
				>
					<Stack>
						<Link href="/" sx={{ textDecoration: "none" }}>
							<Typography
								variant="h5"
								style={{ fontFamily: "Pacifico" }}
								sx={{ ":hover": { color: "#16A34A" } }}
							>
								Grondin Kévin
							</Typography>
						</Link>
					</Stack>
					<Stack direction={"row"} alignItems={"center"} spacing={2}>
						<CustomLink href="/" title="Home" />
						<CustomLink href="/about" title="A propos" />
						<CustomLink href="/competences" title="Compétences" />
						<CustomLink href="/contact" title="Contact" />
					</Stack>
					<Stack direction={"row"} spacing={1}>
						<Stack direction="row" spacing={0.5} alignItems={"center"}>
							<MoonIcon size={16} />
							<Switch
								checked={checked}
								onChange={(e) => {
									setChecked(e.target.checked);
									handleChangeThemeMode();
								}}
							/>
							<SunIcon color="yellow" size={16} />
						</Stack>

						<LanguageSelect language={"FR" as Language} />
					</Stack>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};
