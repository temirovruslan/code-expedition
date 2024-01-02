import { useSelector, useDispatch } from "react-redux";
import { MovieType, MoviesType } from "../../types";
import { useEffect, useState } from "react";
import { getAComment } from "../../app/slices/MoviesSlice";
import { AppDispatch } from "../../app/store";
import { Button, Modal } from "antd";

interface MoviesCardProps {
	searchText: string;
}

const MoviesCard = ({ searchText }: MoviesCardProps) => {
	const dispatch = useDispatch<AppDispatch>();
	const moviesInfo = useSelector((state: any) => state.movies.data.movies);
	const comments = useSelector((state: any) => state.movies.comments?.body);

	const [movies, setMovies] = useState<MoviesType>();
	const [searchedMovies, setSearchedMovies] = useState<MoviesType>();

	useEffect(() => {
		if (moviesInfo) {
			setMovies(moviesInfo);
		}
	}, [moviesInfo]);

	useEffect(() => {
		if (moviesInfo && Array.isArray(moviesInfo)) {
			const search: any = moviesInfo.filter((m) =>
				m.title.toLowerCase().startsWith(searchText)
			);
			setSearchedMovies(search);
		}
	}, [searchText, moviesInfo]);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	// ------

	const see_the_comment = (id: number) => {
		dispatch(getAComment(id));
		showModal();
	};
	return (
		<>
			<Modal
				title="Movie comments"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<p>{comments}</p>
			</Modal>
			{searchedMovies ? (
				Array.isArray(searchedMovies) && searchedMovies.length > 0 ? (
					searchedMovies.map((movie: MovieType, i: number) => (
						<tr
							onClick={() => see_the_comment(movie.id)}
							key={i}
							className={
								i % 2 === 0
									? "bg-gray-50 cursor-pointer"
									: "bg-white cursor-pointer"
							}
						>
							<td className="px-6 py-4 whitespace-nowrap">
								{movie.title}
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								{movie.releaseYear}
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								{movie.director}
							</td>
						</tr>
					))
				) : (
					<tr>
						<td colSpan={3} className="px-6 py-4 whitespace-nowrap">
							No movies found.
						</td>
					</tr>
				)
			) : Array.isArray(movies) && movies.length > 0 ? (
				movies.map((movie: MovieType, i: number) => (
					<tr
						onClick={() => see_the_comment(movie.id)}
						key={i}
						className={
							i % 2 === 0
								? "bg-gray-50"
								: "bg-white cursor-pointer"
						}
					>
						<td className="px-6 py-4 whitespace-nowrap">
							{movie.title}
						</td>
						<td className="px-6 py-4 whitespace-nowrap">
							{movie.releaseYear}
						</td>
						<td className="px-6 py-4 whitespace-nowrap">
							{movie.director}
						</td>
					</tr>
				))
			) : (
				<tr>
					<td colSpan={3} className="px-6 py-4 whitespace-nowrap">
						No movies found.
					</td>
				</tr>
			)}
		</>
	);
};

export default MoviesCard;
