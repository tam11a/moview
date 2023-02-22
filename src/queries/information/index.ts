import instance from "@/services";
import { useQuery } from "@tanstack/react-query";

const getMovieInfo = (params: any) =>
	instance.get(`movie_details.json`, {
		params,
	});

export const useGetMovieInfo = (params?: any) =>
	useQuery(["get-movie-info", params], () => getMovieInfo(params));
