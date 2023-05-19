import { RouterProvider, createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktails from "./pages/SingleCocktails";
import Error from "./pages/Error";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "cocktail/:cocktailId",
				element: <SingleCocktails />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
