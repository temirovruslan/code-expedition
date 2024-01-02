import FavoriteMovies from "../components/favoriteMovies/FavoriteMovies";
import Sidebar from "../components/reusable/Sidebar";

const FavoriteMoviesPage = () => {
	return (
		<div>
			<Sidebar />
			<FavoriteMovies />
		</div>
	);
};

export default FavoriteMoviesPage;
