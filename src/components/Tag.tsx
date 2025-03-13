import { Box, Chip } from "@mui/material";
import type { FC } from "react";

type Props = {
	label: string;
};

export const Tag: FC<Props> = ({ label }) => {
	return (
		<Box>
			<Chip
				label={label}
				sx={{
					border: "1px solid white",
					height: "1.5rem",
					":hover": {
						background: "#BCBDA7",
						color: "#594431",
					},
				}}
			/>
		</Box>
	);
};
