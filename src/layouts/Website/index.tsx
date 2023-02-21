import { Box, Container } from "@mui/material";
import React, { lazy } from "react";
import { Outlet } from "react-router-dom";

const WebsiteHeader = lazy(() => import("./Header"));
const WebsiteFooter = lazy(() => import("./Footer"));

const WebsiteLayout: React.FC = () => {
	return (
		<>
			<Box
				sx={{
					position: "fixed",
					top: 0,
					left: 0,
					height: "100vh",
					width: "100vw",
					backgroundImage: "url(/wp.jpg)",
					backgroundPosition: "center",
					backgroundSize: "cover",
					opacity: 0.06,
					boxShadow: (t) =>
						`inset 0 300px 1000px ${t.palette.background.paper}, inset 0 -300px 1000px ${t.palette.background.paper}`,
					zIndex: -1,
				}}
			/>
			<WebsiteHeader />
			<Container className="min-h-[70vh]">
				<Outlet />
			</Container>
			<WebsiteFooter />
		</>
	);
};

export default WebsiteLayout;
