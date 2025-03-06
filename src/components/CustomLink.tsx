import { Link, Typography } from "@mui/material";
import { FC } from "react";
import { useLocation } from "react-router-dom";

type CustomLinkProps = { href: string; title: string };

export const CustomLink: FC<CustomLinkProps> = ({ href, title }) => {
	const loc = useLocation();

	return (
		<Link sx={{ textDecoration: "none" }} href={href}>
			<Typography
				variant="subtitle1"
				color={href === loc.pathname ? "green" : "initial"}
			>
				{title}
			</Typography>
		</Link>
	);
};