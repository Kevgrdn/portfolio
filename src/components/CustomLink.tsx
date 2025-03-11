import { Link } from "@mui/material";
import type { FC } from "react";
import { useLocation } from "react-router-dom";

type CustomLinkProps = { href: string; title: string };

export const CustomLink: FC<CustomLinkProps> = ({ href, title }) => {
	const loc = useLocation();

	return (
		<Link
			variant="subtitle1"
			sx={{
				textDecoration: "none",
				transition: "text-decoration 0.3s ease-in-out",
				fontWeight: 500,
				...(href === loc.pathname && {
					textDecoration: "underline",
					textShadow: "0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 30px #FFFFFF",
				}),
				":hover": {
					textDecoration: "underline",
					transition: "text-decoration 0.3s ease-in-out",
					textShadow: "0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 30px #FFFFFF",
				},
			}}
			href={href}
		>
			{title}
		</Link>
	);
};
