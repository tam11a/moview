import { lazy } from "react";
import { PUBLIC_ROUTES } from "./paths";

export const publicRoutes = [
	{
		path: PUBLIC_ROUTES.HOME,
		Component: lazy(() => import("@pages/Home")),
	},
	{
		path: PUBLIC_ROUTES.EXPLORE,
		Component: lazy(() => import("@pages/Explore")),
	},
	{
		path: PUBLIC_ROUTES.SHOW,
		Component: lazy(() => import("@pages/Show")),
	},
	{
		path: PUBLIC_ROUTES.NOTFOUND,
		Component: lazy(() => import("@pages/NotFound")),
	},
];
