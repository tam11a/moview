import React from "react";
import { useGetMovieList } from "@/queries/list";

// Swiper Component
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, EffectCoverflow } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Avatar, Paper, Typography } from "@mui/material";

const Splash: React.FC = () => {
	const { data } = useGetMovieList({
		sort_by: "year",
		minimum_rating: 7,
	});
	console.log(data?.data?.data?.movies);
	return (
		<Swiper
			effect={"coverflow"}
			centeredSlides={true}
			autoplay={{
				delay: 5500,
				disableOnInteraction: false,
			}}
			coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
			}}
			spaceBetween={10}
			modules={[Autoplay, EffectCoverflow]}
			className="overflow-y-visible"
		>
			{data?.data?.data?.movies?.map?.((movie: any) => (
				<SwiperSlide
					key={movie.id}
					className="h-[450px]"
				>
					<Paper className="h-[345px] mx-auto mt-[50px] w-4/6 flex flex-row">
						<Avatar
							src={movie.medium_cover_image}
							variant="square"
							className="w-auto scale-125 max-w-sm h-auto shadow-lg shadow-[#00000044] mr-10"
						/>
						<div className="flex flex-col">
							<Typography
								variant="h5"
								className="font-bold"
							>
								{movie.title}
							</Typography>
						</div>
					</Paper>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Splash;
