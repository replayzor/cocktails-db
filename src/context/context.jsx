/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["cocktails", searchTerm],
		queryFn: async () => {
			const result = await axios.get(`${url}${searchTerm}`);
			const { drinks } = result.data;
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
				return newCocktails;
			}
			return [];
		},
	});

	return (
		<AppContext.Provider
			value={{
				setSearchTerm,
				data,
				isLoading,
				isError,
				error,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => useContext(AppContext);
