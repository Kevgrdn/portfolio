import {
	Card,
	CardContent,
	CardHeader,
	Divider,
	Link,
	Stack,
	Typography,
} from "@mui/material";
import {
	CircleUserIcon,
	MailIcon,
	MapPinIcon,
	ServerIcon,
	TriangleAlertIcon,
} from "lucide-react";

export const MentionsLegales = () => {
	const Title = ({
		icon,
		title,
		subheader,
	}: { icon: React.ReactElement; title: string; subheader?: string }) => {
		return (
			<Stack direction={"row"} spacing={0.5} alignItems={"center"}>
				<Stack
					sx={{
						background:
							"linear-gradient(to bottom right, rgb(83, 140, 247),rgb(194, 45, 181))",
						border: "1px solid white",
						borderRadius: "50%",
						width: "2.5rem",
						height: "2.5rem ",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{icon}
				</Stack>
				<Stack justifyContent={"flex-start"} alignItems={"flex-start"}>
					<Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
						{title}
					</Typography>
					<Typography variant="caption">{subheader} </Typography>
				</Stack>
			</Stack>
		);
	};

	return (
		<Stack width={1} height={1} justifyContent={"center"} alignItems={"center"}>
			<Card sx={{ width: "50%" }}>
				<CardHeader
					title="Mentions Légales"
					titleTypographyProps={{ variant: "h5", fontWeight: "bold" }}
					subheader="Informations légales et conditions d'utilisation"
					subheaderTypographyProps={{
						variant: "subtitle1",
					}}
				/>

				<CardContent sx={{ display: "flex", justifyContent: "flex-start" }}>
					<Stack spacing={3} width={"100%"}>
						<Stack spacing={1}>
							<Title
								icon={<CircleUserIcon />}
								title="Propriétaire du site"
								subheader="Informations relatives au propriétaire"
							/>
							<Stack sx={{ alignItems: "flex-start" }}>
								<Typography variant="body2">Grondin Kévin</Typography>

								<Stack direction={"row"} spacing={0.5} alignItems={"center"}>
									<MapPinIcon size={14} />
									<Typography variant="body2">
										231 rue auguste chevallier, 37000 Tours
									</Typography>
								</Stack>
								<Stack direction={"row"} spacing={0.5} alignItems={"center"}>
									<MailIcon size={14} />
									<Link
										variant="body2"
										underline="hover"
										sx={{
											":hover": {
												cursor: "pointer",
											},
										}}
									>
										contact@grondin-kevin.fr
									</Link>
								</Stack>
							</Stack>
						</Stack>
						<Divider sx={{ backgroundColor: "white" }} />
						<Stack spacing={1}>
							<Title
								icon={<ServerIcon />}
								title="Hébergeur"
								subheader="Informations relatives à l'hébergeur"
							/>
							<Stack sx={{ alignItems: "flex-start" }}>
								<Typography variant="body2">
									HOSTINGER operations, UAB
								</Typography>

								<Stack direction={"row"} spacing={0.5} alignItems={"center"}>
									<MapPinIcon size={14} />
									<Typography variant="body2">
										Švitrigailos str. 34, Vilnius 03230 Lithuania
									</Typography>
								</Stack>
								<Stack direction={"row"} spacing={0.5} alignItems={"center"}>
									<MailIcon size={14} />
									<Link
										variant="body2"
										underline="hover"
										sx={{
											":hover": {
												cursor: "pointer",
											},
										}}
									>
										https://www.hostinger.fr/
									</Link>
								</Stack>
							</Stack>
						</Stack>
						<Divider sx={{ backgroundColor: "white" }} />
						<Stack spacing={1}>
							<Title
								icon={<TriangleAlertIcon />}
								title="Responsabilité juridique"
							/>
							<Typography variant="body2" sx={{ textAlign: "justify" }}>
								Le propriétaire du site ne peut être tenu responsable des
								dommages directs ou indirects causés au matériel de
								l'utilisateur lors de l'accès au site.
							</Typography>
						</Stack>
					</Stack>
				</CardContent>
			</Card>
		</Stack>
	);
};
