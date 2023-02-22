import React from "react";
import { useGetMovieList } from "@/queries/list";

// Swiper Component
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, EffectCoverflow } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

import { Avatar, IconButton, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Iconify from "@components/iconify";

const Splash: React.FC = () => {
	const { data } = useGetMovieList({
		sort_by: "year",
		minimum_rating: 1,
		limit: 20,
	});
	// console.log(data?.data?.data?.movies);
	return (
		<Swiper
			effect={"coverflow"}
			centeredSlides={true}
			autoplay={{
				delay: 5500,
				disableOnInteraction: false,
			}}
			coverflowEffect={{
				rotate: 30,
				stretch: 0,
				depth: 110,
				modifier: 1,
			}}
			spaceBetween={0}
			modules={[Autoplay, EffectCoverflow]}
			className="overflow-y-visible"
		>
			{data?.data?.data?.movies?.map?.((movie: any) => (
				<SwiperSlide
					key={movie.id}
					className="min-h-[450px]"
				>
					<Paper
						className="h-[345px] mx-auto mt-[50px] w-4/6 flex flex-col sm:flex-row bg-transparent shadow-none sm:bg-[#161A1E] sm:shadow-lg"
						sx={{ background: "transparent", bgcolor: "background.paper" }}
						elevation={5}
					>
						<Link to={`show/${movie.id}`}>
							<Avatar
								src={movie.medium_cover_image}
								variant="square"
								className="w-[70vw] sm:w-auto sm:scale-125 max-w-[200px] sm::max-w-[100px] md:max-w-sm min-w-160px sm:min-w-[210px] h-auto shadow-lg shadow-[#00000044] sm:mr-10 text-9xl"
							>
								<Iconify icon="tabler:movie-off" />
							</Avatar>
						</Link>
						<div className="hidden sm:flex flex-col gap-3 px-7 justify-center">
							<Typography
								variant="h6"
								className="font-bold"
								component={Link}
								to={`show/${movie.id}`}
							>
								{movie.title}{" "}
								<span className="text-slate-500">({movie.year})</span>
							</Typography>
							<div className="flex flex-row items-center gap-2">
								<IconButton
									size="large"
									className="rounded text-yellow-500 p-0 pb-1"
									disabled
								>
									<Iconify icon={"material-symbols:star-rounded"} />
								</IconButton>
								<Typography
									variant="body1"
									className="font-bold"
								>
									{movie.rating}
								</Typography>
								{!!movie.runtime && (
									<Typography
										variant="body1"
										className="text-slate-500 font-bold"
									>
										• {movie.runtime}m
									</Typography>
								)}
							</div>
							<Typography
								variant="subtitle2"
								sx={{ "& span": { color: "primary.main" } }}
								className="hidden lg:block"
							>
								{movie.description_full?.length > 210 ? (
									<>
										{movie.description_full?.slice?.(0, 210)}....{" "}
										<Link to={`show/${movie.id}`}>
											<span>Read more</span>
										</Link>
									</>
								) : (
									movie.description_full
								)}
							</Typography>

							<Typography
								variant="caption"
								className="text-slate-500 font-semibold"
							>
								{movie.genres?.join?.(" • ")}
							</Typography>
						</div>
					</Paper>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Splash;
