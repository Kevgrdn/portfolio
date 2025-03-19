import { Link, Stack, useTheme } from "@mui/material";
import { type FC, useState } from "react";
import { useLocation } from "react-router-dom";

type CustomLinkProps = {
	href: string;
	title: string;
	icon?: React.ReactElement;
};

export const CustomLink: FC<CustomLinkProps> = ({ href, title, icon }) => {
	const loc = useLocation();
	const theme = useTheme();

	const [isHover, setIsHover] = useState(false);

	return (
		<Stack spacing={0.25} justifyContent={"center"}>
			<Stack direction={"row"} spacing={0.5} alignItems={"center"}>
				{icon}
				<Link
					fontSize={"1rem"}
					onMouseEnter={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}
					sx={{
						transition: "text-decoration 0.3s ease-in-out",
						...(href === loc.pathname
							? {
									textDecoration: "none",
									color: "secondary.main",
									fontWeight: 800,
								}
							: {
									fontWeight: 600,
									textDecoration: "none",
								}),
						":hover": {
							transition: "text-decoration 0.3s ease-in-out",
							// color: "secondary.main",
						},
					}}
					href={href}
				>
					{title}
				</Link>
			</Stack>
			{isHover ? (
				<span
					style={{
						display: "block",
						alignSelf: "center",
						height: "2px",
						backgroundColor: theme.palette.secondary.main,
						animation: "grow-shrink 2s ease-in-out infinite",
					}}
				/>
			) : (
				<span style={{ height: "2px" }} />
			)}
		</Stack>
	);
};
