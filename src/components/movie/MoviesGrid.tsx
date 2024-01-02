import { useState, useEffect } from "react";
import MoviesCard from "./MoviesCard";
import { useSelector } from "react-redux";

const MoviesGrid = () => {
	const { loading, error } = useSelector((state: any) => state.movies);
	const [isError, setIsError] = useState<boolean>(false);
	const [searchText, setSearchText] = useState<string>("");

	useEffect(() => {
		setIsError(error !== null);
	}, [error]);

	return (
		<div className="min-h-full w-full">
			<input
				onChange={(e) => setSearchText(e.target.value)}
				className="mx-5 my-2 p-1 border-2 "
				type="text"
				placeholder="Search movies.."
			/>
			<table className="w-full divide-y divide-gray-200">
				<thead>
					<tr>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Title
						</th>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Release Year
						</th>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Director
						</th>
					</tr>
				</thead>
				<tbody>
					{isError ? (
						<tr>
							<td
								colSpan={3}
								className="flex items-center justify-center text-red-500 text-2xl"
							>
								{error}
							</td>
						</tr>
					) : loading ? (
						<tr>
							<td
								colSpan={3}
								className="flex items-center justify-center text-2xl"
							>
								Loading...
							</td>
						</tr>
					) : (
						<MoviesCard searchText={searchText} />
					)}
				</tbody>
			</table>
		</div>
	);
};

export default MoviesGrid;
