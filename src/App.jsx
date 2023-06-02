import { RouterProvider, createBrowserRouter } from "react-router-dom";

// pages
import {
	Home,
	Error,
	About,
	Newsletter,
	SingleCocktails,
	RootLayout,
	SinglePageError,
} from "./pages";

import { loader as homeLoader } from "./pages/Home";
import { loader as singleCocktailLoader } from "./pages/SingleCocktails";
import { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />,
				loader: homeLoader,
				errorElement: <SinglePageError />,
			},
			{
				path: "cocktail/:cocktailId",
				element: <SingleCocktails />,
				loader: singleCocktailLoader,
				errorElement: <SinglePageError />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "newsletter",
				element: <Newsletter />,
				action: newsletterAction,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
