import PokemonCard from "./PokemonCard";

import { useEffect, useState } from "react";
import { get_pokemon_names, get_pokemon_image_url } from "./logic";
import { ChangeEvent } from "react";

interface PockemonTypes {
	name: string;
	imageUrl: string;
}

function PokemonGrid() {
	const [name, setNames] = useState<string[] | undefined>([]);
	const [pockemons, setPockemons] = useState<PockemonTypes[]>([]);
	const [favorite, setFavorite] = useState<string[]>([]);

	const [updateList, setUpdatedList] = useState<PockemonTypes[]>([]);

	const [isFavorite, setIsFavorite] = useState<boolean>(false);

	useEffect(() => {
		filterFav();
	}, [favorite, pockemons]);

	const filterFav = () => {
		if (pockemons) {
			const res = pockemons.filter((pockemon) =>
				favorite.includes(pockemon.name)
			);
			setUpdatedList(res);
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { checked, value } = e.currentTarget;

		setFavorite((prev) => {
			if (checked) {
				return [...prev, value];
			} else {
				// If not checked, find the index of the value in the array
				const index = prev.indexOf(value);

				// Check if the value was found in the array
				if (index !== -1) {
					// If found, create a copy of the array
					const updList = [...prev];
					updList.splice(index, 1);
					return updList;
				}
			}
			return prev;
		});
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await get_pokemon_names(25);
				setNames(result);
			} catch (error: any) {
				console.error("Error fetching data:", error.message);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		if (name) {
			const fetchIMG = async (): Promise<void> => {
				try {
					const pokemonData: PockemonTypes[] = [];
					await Promise.all(
						name.map(async (name) => {
							const imageUrl: string =
								await get_pokemon_image_url(name);
							pokemonData.push({ name, imageUrl });
						})
					);
					setPockemons(pokemonData);
				} catch (error) {
					console.error(error);
				}
			};
			fetchIMG();
		}
	}, [name]);

	const favoriteShow = () => {
		setIsFavorite((prev) => !prev);
	};

	return (
		<div>
			<input onChange={favoriteShow} type="checkbox" />
			Favourites only
			<br />
			<div>
				{isFavorite ? (
					<PokemonCard
						pockemons={updateList}
						handleChange={handleChange}
						favorite={favorite}
					/>
				) : (
					<PokemonCard
						pockemons={pockemons}
						handleChange={handleChange}
						favorite={favorite}
					/>
				)}
			</div>
		</div>
	);
}

export default PokemonGrid;
