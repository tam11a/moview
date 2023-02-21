import { createTheme } from "@mui/material";

localStorage.setItem("theme", "dark");

const theme = createTheme({
	palette: {
		mode: "dark",
		background: {
			default: "#1F2326",
			paper: "#161A1E",
		},
		primary: {
			main: "#ffc933",
		},
	},
	typography: {
		fontFamily: "Nunito, sans-serif",
		button: {
			textTransform: "unset",
		},
	},
});

export default theme;
