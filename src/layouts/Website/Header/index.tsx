import Iconify from "@components/iconify";
import {
	AppBar,
	Avatar,
	Container,
	Hidden,
	IconButton,
	ListItemText,
	Toolbar,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const WebsiteHeader: React.FC = () => {
	return (
		<>
			<AppBar className="shadow-none bg-[#161a1e32] backdrop-blur-sm">
				<Toolbar className="bg-[#161a1e96] py-4">
					<Container className="flex flex-row items-center justify-between gap-7">
						<span className="flex flex-row items-center justify-center gap-3 flex-1">
							<Link to={"/"}>
								<Avatar
									src={"/favicon.svg"}
									variant="square"
								/>
							</Link>
							<Hidden smDown>
								<ListItemText
									primary={
										<>
											Mo<span className="text-[#ffc933]">view</span>
										</>
									}
									secondary={"Find and Watch Movies!!"}
									primaryTypographyProps={{ className: "font-bold" }}
								/>
							</Hidden>
						</span>
						<Link to={"/"}>Home</Link>
						<Link to={"/explore"}>Explore</Link>
						<IconButton
							color="primary"
							component={Link}
							to={"/search"}
						>
							<Iconify icon="ri:search-2-line" />
						</IconButton>
					</Container>
				</Toolbar>
			</AppBar>
			<div className="mb-32" />
		</>
	);
};

export default WebsiteHeader;
