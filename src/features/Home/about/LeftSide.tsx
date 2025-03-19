import { Card } from "@mui/material";
import meFullSize from "../../../assets/me_full.jpg";

export const LeftSide = () => {
	return (
		<Card
			sx={{
				width: "100%",
				borderRadius: "1rem",
				height: { xs: "35rem", md: "30rem" },
				backgroundImage: `url(${String(meFullSize)})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		/>
	);
};
