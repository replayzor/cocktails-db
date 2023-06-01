import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

import Wrapper from "../assets/wrappers/SingleCocktailPage";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktails = () => {
	const { id, data } = useLoaderData();

	const singleDrink = data.drinks[0];

	const {
		strDrink: name,
		strDrinkThumb: image,
		strAlcoholic: info,
		strCategory: category,
		strGlass: glass,
		strInstructions: instructions,
	} = singleDrink;

	const ingredients = Object.keys(singleDrink)
		.filter(
			(key) => key.startsWith("strIngredient") && singleDrink[key] !== null
		)
		.map((key) => singleDrink[key]);
	console.log(ingredients);

	return (
		<Wrapper key={id}>
			<header>
				<Link to="/" className="btn">
					back home
				</Link>
				<h3>{name}</h3>
			</header>
			<div className="drink">
				<img src={image} alt={name} className="img" />
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
						<span className="drink-data">Ingredients:</span>
						{ingredients.map((ingredient, index) => {
							return (
								<span key={index} className="ing">
									{ingredient}
									{index < ingredient.length - 1 ? "," : ""}
								</span>
							);
						})}
					</p>
					<p>
						<span className="drink-data">Instructions:</span>
						{instructions}
					</p>
				</div>
			</div>
		</Wrapper>
	);
};
export default SingleCocktails;

export const loader = async ({ params }) => {
	const { cocktailId } = params;
	const response = await axios.get(`${url}${cocktailId}`);
	const data = response.data;

	return { cocktailId, data };
};
