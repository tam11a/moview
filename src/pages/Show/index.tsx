import React from "react";
import { useGetMovieInfo } from "@/queries/information";
import Iconify from "@components/iconify";
import {
	Avatar,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Paper,
	Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

const Show: React.FC = () => {
	const { show_id } = useParams();

	const { data, isLoading } = useGetMovieInfo({
		movie_id: show_id,
		with_cast: true,
	});

	const [info, setInfo] = React.useState<any>();
	React.useEffect(() => {
		if (!data) return;
		setInfo(data?.data?.data?.movie);
	}, [data]);

	console.log(info);
	return isLoading ? (
		<></>
	) : (
		<>
			{/* <div className="relative">
				<Avatar
					variant="rounded"
					className="w-full h-full max-h-[410px] min-h-[300px] z-10"
					src={info?.background_image_original}
				>
					<Iconify icon="tabler:movie-off" />
				</Avatar>
				<div className="absolute bottom-2 right-2 z-20">
					<Typography variant="h5">{info?.title}</Typography>
				</div>
			</div> */}
			<Avatar
				src={info?.medium_cover_image}
				variant="square"
				className="relative md:hidden w-full max-w-xs min-w-[230px] min-h-[400px] h-auto mb-6 shadow-lg shadow-[#00000044] text-9xl mx-auto"
			>
				<Iconify icon="tabler:movie-off" />
			</Avatar>
			<div className="flex flex-col md:flex-row gap-6">
				<div className="flex-1 flex flex-col gap-3">
					<Typography
						variant="h4"
						className="font-bold text-[1.8rem]"
					>
						{info?.title} <span className="text-slate-400">({info?.year})</span>
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
							{info?.rating}
						</Typography>
						{!!info?.runtime && (
							<Typography
								variant="body1"
								className="text-slate-300 font-bold flex flex-row items-center gap-2"
							>
								•
								<Iconify
									icon="ic:round-play-arrow"
									className="text-slate-500 text-lg"
								/>
								{info?.runtime}m
							</Typography>
						)}
						{!!info?.language && (
							<Typography
								variant="body1"
								className="text-slate-300 font-bold flex flex-row items-center gap-2"
							>
								•
								<Iconify
									icon="fa6-solid:language"
									className="text-slate-500 text-lg"
								/>
								{info?.language}
							</Typography>
						)}
						{!!info?.download_count && (
							<Typography
								variant="body1"
								className="text-slate-300 font-bold flex flex-row items-center gap-2"
							>
								•
								<Iconify
									icon="material-symbols:sim-card-download"
									className="text-slate-500 text-lg"
								/>
								{info?.download_count}
							</Typography>
						)}
					</div>

					<Typography
						variant="body1"
						className="text-justify"
					>
						{info?.description_full}
					</Typography>
					<Typography
						variant="subtitle2"
						className="text-slate-400 font-semibold"
					>
						{info?.genres?.join?.(" • ")}
					</Typography>

					{!!info?.torrents?.length && (
						<>
							<Typography
								variant="h5"
								className="font-bold my-6"
							>
								Torrents{" "}
								<span className="text-slate-400">
									({info?.torrents?.length})
								</span>
							</Typography>
							<Paper
								sx={{ background: "transparent", bgcolor: "background.paper" }}
							>
								<List className="divide-y-2 divide-dashed divide-slate-800">
									{info?.torrents?.map?.((file: any) => (
										<ListItem key={file.hash}>
											<ListItemText
												primary={file.quality}
												secondary={
													<span className="flex flex-row items-center gap-1">
														<span className="text-slate-400 text-xs">
															{file.size}
														</span>
														{!!file.peers && (
															<>
																{" • "}
																<span className="text-slate-400 text-xs">
																	{file.peers}
																</span>
																<span className="text-red-400 text-xs">
																	<Iconify icon="fluent:share-screen-person-p-16-filled" />
																</span>
															</>
														)}
														{!!file.seeds && (
															<>
																{" • "}
																<span className="text-slate-400 text-xs">
																	{file.seeds}
																</span>
																<span className="text-green-400 text-xs">
																	<Iconify icon="icon-park-solid:hold-seeds" />
																</span>
															</>
														)}
													</span>
												}
											/>
											<IconButton
												color="primary"
												component={"a"}
												href={file?.url}
												target="_blank"
											>
												<Iconify icon={"ic:baseline-play-for-work"} />
											</IconButton>
										</ListItem>
									))}
								</List>
							</Paper>
						</>
					)}

					{!!info?.yt_trailer_code && (
						<>
							<Typography
								variant="h5"
								className="font-bold my-6"
							>
								YouTube Trailer
							</Typography>
							<iframe
								src={`https://www.youtube.com/embed/${info?.yt_trailer_code}`}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								title={info?.title}
								className="min-h-[300px] lg:min-h-[500px] rounded shadow-2xl"
							/>
						</>
					)}
				</div>
				<div>
					{!!info?.medium_cover_image && (
						<Avatar
							src={info?.medium_cover_image}
							variant="rounded"
							className="hidden md:flex w-full max-w-xs min-w-[230px] min-h-[345px] h-auto shadow-lg shadow-[#00000044] text-9xl"
						>
							<Iconify icon="tabler:movie-off" />
						</Avatar>
					)}
					{!!info?.cast?.length && (
						<>
							<Divider className="my-4 mt-6 border-2 border-dashed" />
							<Typography
								variant="h6"
								className="mb-3"
							>
								Cast ({info?.cast?.length})
							</Typography>
							{info?.cast?.map?.((cast: any) => (
								<ListItem
									key={cast?.imdb_code}
									className="gap-2 p-0"
								>
									<Avatar
										src={cast?.url_small_image}
										variant="rounded"
									/>
									<ListItemText
										primary={cast?.name}
										secondary={cast?.character_name}
									/>
								</ListItem>
							))}
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Show;
