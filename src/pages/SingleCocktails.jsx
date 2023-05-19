import axios from "axios";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

// components
import Loading from "../components/Loading";
import Error from "./Error";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktails = () => {
	const { cocktailId } = useParams();

	const { data, isLoading } = useQuery({
		queryKey: ["singleCocktail", cocktailId],
		queryFn: async () => {
			const result = await axios.get(`${url}${cocktailId}`);
			const { drinks } = result.data;

			return drinks;
		},
	});

	if (isLoading) {
		return <Loading />;
	}

	if (!data || data.length === 0) {
		return <Error />;
	}

	const drinkInfo = data.map((drink) => {
		const {
			idDrink: id,
			strDrink: name,
			strDrinkThumb: image,
			strCategory: category,
			strAlcoholic: info,
			strGlass: glass,
			strInstructions: instructions,
			strIngredient1,
			strIngredient2,
			strIngredient3,
			strIngredient4,
			strIngredient5,
		} = drink;
		const ingredients = [
			strIngredient1,
			strIngredient2,
			strIngredient3,
			strIngredient4,
			strIngredient5,
		];

		return (
			<div key={id}>
				<Link to="/" className="btn btn-primary">
					back home
				</Link>
				<h2 className="section-title">{name}</h2>
				<div className="drink">
					<img src={image} alt={name} />
					<div className="drink-info">
						<p>
							<span className="drink-data">Name:</span>
							{name}
						</p>
						<p>
							<span className="drink-data">Category:</span>
							{category}
						</p>
						<p>
							<span className="drink-data">Info:</span>
							{info}
						</p>
						<p>
							<span className="drink-data">Glass:</span>
							{glass}
						</p>
						<p>
							<span className="drink-data">Instructions:</span>
							{instructions}
						</p>
						<p>
							<span className="drink-data">Ingredients:</span>
							{ingredients.map((ingredient, index) => {
								return ingredient ? (
									<span key={index}>{ingredient}, </span>
								) : null;
							})}
						</p>
					</div>
				</div>
			</div>
		);
	});

	return <section className="section cocktail-section">{drinkInfo}</section>;
};
export default SingleCocktails;
