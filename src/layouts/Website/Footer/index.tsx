import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const WebsiteFooter: React.FC = () => {
	return (
		<>
			<AppBar className="relative mt-16">
				<Toolbar
					sx={{ bgcolor: "background.paper" }}
					className="min-h-[400px]"
				>
					<Container>
						<ul className="flex flex-row gap-6 items-center justify-center">
							<li>
								<Link to={"/"}>Home</Link>
							</li>
							<li>
								<Link to={"/explore"}>Explore</Link>
							</li>
							<li>
								<a
									href="https://github.com/tam11a/moview"
									target="_blank"
								>
									Docs
								</a>
							</li>
						</ul>

						<div className="flex flex-row items-center justify-center gap-2 mt-20">
							From
							<a
								href="https://github.com/tam11a"
								target="_blank"
							>
								<span className="text-[#ffc933]">
									<b>Tam</b>
								</span>
							</a>
						</div>
					</Container>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default WebsiteFooter;
