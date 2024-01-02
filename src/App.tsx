import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pockemons from "./pages/Pockemons";
import Movies from "./pages/Movies";
import AsyncPage from "./pages/AsyncPage";
import FavoriteMoviesPage from "./pages/FavoriteMoviesPage";
import PostsPage from "./pages/PostsPage";
// "test": "jest",
// "test:watch": "jest --watch"
function App() {
	return (
		<div className="min-h-screen bg-[#f0dfef]">
			<BrowserRouter>
				<Routes>
					<Route path="/" index element={<Home />} />
					<Route path="/pokemons" index element={<Pockemons />} />
					<Route path="/movies" index element={<Movies />} />
					<Route path="/async" index element={<AsyncPage />} />
					<Route path="/posts" index element={<PostsPage />} />
					<Route
						path="/favorite-movies"
						element={<FavoriteMoviesPage />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
