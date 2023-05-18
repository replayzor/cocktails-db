import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktails from "./pages/SingleCocktails";
import Error from "./pages/Error";

// components
import Navbar from "./components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="cocktail/:cocktailId" element={<SingleCocktails />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
