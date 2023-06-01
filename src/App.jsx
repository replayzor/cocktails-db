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
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "newsletter",
				element: <Newsletter />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
