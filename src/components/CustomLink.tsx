import { Link, Typography } from "@mui/material";
import type { FC } from "react";
import { useLocation } from "react-router-dom";

type CustomLinkProps = { href: string; title: string };

export const CustomLink: FC<CustomLinkProps> = ({ href, title }) => {
	const loc = useLocation();

	return (
		<Link
			sx={{
				textDecoration: "none",
				transition: "text-decoration 0.3s ease-in-out",
				":hover": {
					textDecoration: "underline",
					transition: "text-decoration 0.3s ease-in-out",
				},
			}}
			href={href}
		>
			<Typography
				variant="subtitle1"
				color={href === loc.pathname ? "green" : "grey"}
				fontWeight={500}
			>
				{title}
			</Typography>
			<span
				style={{
					position: "absolute",
					bottom: 0,
					left: 0,
					width: "100%",
					height: 2,
					backgroundColor: "green",
					opacity: 0,
					transform: "scaleX(0)",
					transition: "opacity 0.3s, transform 0.3s",
				}}
			/>
		</Link>
	);
};
