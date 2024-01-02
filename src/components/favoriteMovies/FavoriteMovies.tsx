import { useEffect, useState, ChangeEvent, FC } from "react";
import {
	fantastic_action,
	fantastic_romance,
	fantastic_movies,
	Movietype,
} from "./logic";

const FavoriteMovies = () => {
	const [movies, setMovies] = useState<Movietype[]>([]);
	const [favorite, setfavorite] = useState<Movietype[]>([]);
	const [favoriteMovies, setfavoriteMovies] = useState<string[]>([]);
	const [isFavorite, setisfavorite] = useState<boolean>(false);

	const showFavorite = () => {
		setisfavorite((prev) => !prev);
		filterMovies();
	};

	const filterMovies = () => {
		let filtered = movies.filter((movie) =>
			favoriteMovies.includes(movie.name)
		);
		setfavorite(filtered);
	};

	const handleFavorite = (e: ChangeEvent<HTMLInputElement>) => {
		const { checked, value } = e.currentTarget;
		setfavoriteMovies((prev) => {
			if (checked) {
				return [...prev, value];
			} else {
				const ind = prev.indexOf(value);
				if (ind !== -1) {
					const updated = [...prev];
					updated.splice(ind, 1);
					return updated;
				}
			}
			return prev;
		});
	};

	useEffect(() => {
		filterMovies();
	}, [isFavorite, handleFavorite]);
	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const fantastic = fantastic_movies();
				const romance = fantastic_romance();
				const action = fantastic_action();

				// Promise.any resolves with the first successful fetch, regardless of other promises'
				const firstMovies = await Promise.any([
					fantastic,
					romance,
					action,
				]);

				setMovies(firstMovies);
			} catch (error) {
				console.error();
				setMovies([]);
			}
		};

		fetchMovies();
	}, []);
	return (
		<ul>
			<h2 className="text-2xl font-bold">First resolved movie list:</h2>
			<div className="flex items-center">
				<h5 className="text-lg font-medium mr-2">Only favorites</h5>
				<input
					onChange={showFavorite}
					className="w-5 h-5"
					type="checkbox"
				/>
			</div>
			{isFavorite ? (
				<Movies
					favoriteMovies={favoriteMovies}
					movies={favorite}
					handleFavorite={handleFavorite}
				/>
			) : (
				<Movies
					favoriteMovies={favoriteMovies}
					movies={movies}
					handleFavorite={handleFavorite}
				/>
			)}
		</ul>
	);
};

interface MoviesProps {
	movies: Movietype[];
	handleFavorite: (e: ChangeEvent<HTMLInputElement>) => void;
	favoriteMovies: string[];
}

export default FavoriteMovies;

const Movies: FC<MoviesProps> = ({
	movies,
	handleFavorite,
	favoriteMovies,
}) => {
	return (
		<>
			{movies &&
				movies.map((movie, i) => {
					return (
						<li key={i}>
							<input
								onChange={handleFavorite}
								className="mr-2"
								type="checkbox"
								value={movie.name}
								checked={favoriteMovies.includes(movie.name)}
							/>
							{i + 1} {movie.name}
						</li>
					);
				})}
		</>
	);
};
