export async function get_pokemon_names(limit: number): Promise<string[]> {
	try {
		const result: string[] = [];
		const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`;
		const response = await fetch(url);
		const data = await response.json();
		if (data.results) {
			data.results.forEach((item: { name: string }) => {
				result.push(item.name);
			});
		}
		return result;
	} catch (error: any) {
		console.error(error.message);
		return [];
	}
}

export async function get_pokemon_image_url(
	pokemon_name: string
): Promise<string> {
	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`;
		const res = await fetch(url);
		const data = await res.json();

		if (data) {
			return data.sprites.front_default;
		} else {
			throw new Error("Invalid data or missing front_default sprite");
		}
	} catch (error: any) {
		console.error(error.message);
		return ""; // or throw error if you prefer
	}
}
