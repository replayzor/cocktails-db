import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktails from "./pages/SingleCocktails";
import Error from "./pages/Error";

// components
import Navbar from "./components/Navbar";

// const router = createBrowserRouter([
// 	{ path: "/", element: <Home /> },
// 	{ path: "/about", element: <About /> },
// 	{ path: "/cocktail/:cocktailId", element: <SingleCocktails /> },
// 	{ path: "*", element: <Error /> },
// ]);

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
