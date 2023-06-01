import { useLoaderData } from "react-router-dom";

import axios from "axios";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

const cocktailSearchUrl =
	"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Home = () => {
	const { drinks, searchTerm } = useLoaderData();

	return (
		<>
			<SearchForm />
			<CocktailList drinks={drinks} />
		</>
	);
};

export default Home;

export const loader = async () => {
	const searchTerm = "";
	const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
	return { drinks: response.data.drinks, searchTerm };
};
