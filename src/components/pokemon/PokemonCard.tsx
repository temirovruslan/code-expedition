function PokemonCard({ pockemons, handleChange, favorite }: any) {
	return (
		<ul>
			{pockemons.map((item: any, i: number) => (
				<li style={{ display: "flex" }} key={i}>
					<input
						value={item.name}
						onChange={handleChange}
						type="checkbox"
						checked={favorite.includes(item.name)} // Check if the Pokémon is in favorites
					/>
					<p> {item.name}</p>
					<img src={item.imageUrl} alt={item.name} />
				</li>
			))}
		</ul>
	);
}

export default PokemonCard;
