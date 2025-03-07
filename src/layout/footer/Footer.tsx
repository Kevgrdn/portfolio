import { Link, Stack, Typography } from "@mui/material";

export const Footer = () => {
	return (
		<Stack
			sx={{
				bgcolor: "#FAFAFA",
				width: "100%",
				height: "100%",
				justifyContent: "flex-end",
			}}
		>
			<Link
				href="https://grondin-kevin.fr"
				sx={{ textDecoration: "none", color: "inherit" }}
			>
				<Typography
					variant="subtitle2"
					sx={{ ":hover": { textDecoration: "underline" } }}
				>
					grondin-kevin.fr
				</Typography>
			</Link>

			<Stack
				direction={"row"}
				justifyContent={"center"}
				alignItems={"center"}
				alignContent={"center"}
				gap={1}
			>
				<Typography variant="caption" color={"grey"}>
					© {new Date().getFullYear()} Grondin Kévin
				</Typography>
				<Typography variant="caption" color={"grey"}>
					Tous droits réservés
				</Typography>
				<Link
					href="https://grondin-kevin.fr/mentions-legales"
					sx={{
						textDecoration: "none",
						color: "inherit",
						":hover": { textDecoration: "underline" },
					}}
				>
					<Typography sx={{ height: "100%" }} variant="caption" color={"grey"}>
						Mentions légales
					</Typography>
				</Link>
			</Stack>
		</Stack>
	);
};
