/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");
	const [cocktails, setCocktails] = useState([]);

	// fetchDrinks
	const fetchDrinks = async () => {
		setLoading(true);
		try {
			const response = await axios.get(`${url}${searchTerm}`);
			const { drinks } = response.data;
			if (drinks) {
				const newCocktails = drinks.map((item) => {
					const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
						item;

					return {
						id: idDrink,
						name: strDrink,
						image: strDrinkThumb,
						info: strAlcoholic,
						glass: strGlass,
					};
				});
				setCocktails(newCocktails);
			} else {
				setCocktails([]);
			}
			setLoading(false);
		} catch (error) {
			console.log(error.message);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchDrinks();
	}, [searchTerm]);

	return (
		<AppContext.Provider
			value={{
				loading,
				cocktails,
				setSearchTerm,
				searchTerm,
				setCocktails,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => useContext(AppContext);
