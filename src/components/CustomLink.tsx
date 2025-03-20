import { Link, Stack, useTheme } from "@mui/material";
import { cloneElement, type FC, useState } from "react";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "../hooks/useIsMobile";

type CustomLinkProps = {
	href: string;
	title: string;
	icon?: React.ReactElement;
};

export const CustomLink: FC<CustomLinkProps> = ({ href, title, icon }) => {
	const loc = useLocation();
	const theme = useTheme();
	const isMobile = useIsMobile();
	const [isHover, setIsHover] = useState(false);

	return (
		<Stack spacing={0.25} justifyContent={"center"} alignItems={"center"}>
			<Stack direction={"row"} spacing={1} alignItems={"center"}>
				{
					//@ts-ignore
					cloneElement(icon, {
						...(href === loc.pathname
							? {
									textDecoration: "none",
									color: theme.palette.secondary.main,
									fontWeight: 700,
								}
							: {
									fontWeight: 400,
									textDecoration: "none",
								}),
						":hover": {
							transition: "text-decoration 0.3s ease-in-out",
						},
					})
				}
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
									fontWeight: 700,
								}
							: {
									fontWeight: 400,
									textDecoration: "none",
								}),
						":hover": {
							transition: "text-decoration 0.3s ease-in-out",
						},
					}}
					href={href}
				>
					{title}
				</Link>
			</Stack>
			{isHover && !isMobile ? (
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
