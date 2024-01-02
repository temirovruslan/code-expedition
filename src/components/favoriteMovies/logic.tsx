export interface Movietype {
	id: number;
	name: string;
}

export const fantastic_movies = async (): Promise<Movietype[]> => {
	try {
		const url = `http://localhost:3000/fantastic`;
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			console.log("Faild to fetch");
			return [];
		}
	} catch (error) {
		console.log(error);
		return [];
	}
};

export const fantastic_romance = async (): Promise<Movietype[]> => {
	try {
		const url = `http://localhost:3000/romance`;
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			console.log("Faild to fetch");
			return [];
		}
	} catch (error) {
		console.log(error);
		return [];
	}
};

export const fantastic_action = async (): Promise<Movietype[]> => {
	try {
		const url = `http://localhost:3000/action`;
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			console.log("Faild to fetch");
			return [];
		}
	} catch (error) {
		console.log(error);
		return [];
	}
};
