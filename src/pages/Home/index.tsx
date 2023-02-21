import React from "react";
import { useGetMovieList } from "@/queries/list";

const Home: React.FC = () => {
	const { data } = useGetMovieList();
	console.log(data);
	return <div>Hello From Home!!</div>;
};

export default Home;
