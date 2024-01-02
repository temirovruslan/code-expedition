export interface MoviesType {
	movieGenres: {
		movieId: number;
		genreId: number;
	};
	reviews: {
		body: string;
		id: number;
		movieId: number;
	};
	genres: {
		id: number;
		name: string;
	};
	movies: {
		id: number;
		title: string;
		director: string;
		releaseYear: string;
	};
}

export interface MovieType {
	id: number;
	title: string;
	director: string;
	releaseYear: string;
}

export interface moviesState {
	data: MoviesType[];
	loading: boolean;
	error: null;
	comments: any;
}

export interface PostType {
	id: number ;
	title: string;
	description: string;
}

