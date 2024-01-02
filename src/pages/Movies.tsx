import Sidebar from "../components/reusable/Sidebar";
import MoviesGrid from "../components/movie/MoviesGrid";
import { useEffect } from "react";
import { fetchMovies } from "../app/slices/MoviesSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";

const Movies = () => {
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		dispatch(fetchMovies());
	}, []);
	return (
		<div>
			<Sidebar />
			<MoviesGrid />
		</div>
	);
};

export default Movies;
