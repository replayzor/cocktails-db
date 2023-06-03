import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
		},
	},
});

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />,
				errorElement: <SinglePageError />,
				loader: homeLoader(queryClient),
			},
			{
				path: "cocktail/:cocktailId",
				element: <SingleCocktails />,
				loader: singleCocktailLoader(queryClient),
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
				errorElement: <SinglePageError />,
			},
		],
	},
]);

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />;
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
