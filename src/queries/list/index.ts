import instance from "@/services";
import { useQuery } from "@tanstack/react-query";

const getMovieList = (params: any) =>
	instance.get(`list_movies.json`, {
		params,
	});

export const useGetMovieList = (params?: any) =>
	useQuery(["get-movie-list", params], () => getMovieList(params));
