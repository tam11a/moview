import Iconify from "@components/iconify";
import { Container, IconButton, Typography } from "@mui/material";
import React from "react";

const NotFound: React.FC = () => {
	return (
		<Container>
			<div className=" flex flex-col items-center gap-4 mx-auto max-w-[450px] w-full h-full pt-48">
				<IconButton
					color={"primary"}
					size="large"
					className="rotate-12 text-7xl"
				>
					<Iconify icon="tabler:movie-off" />
				</IconButton>
				<Typography variant="h6">No Page Found!!</Typography>
			</div>
		</Container>
	);
};

export default NotFound;
