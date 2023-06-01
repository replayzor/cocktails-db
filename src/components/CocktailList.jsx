// components
import Wrapper from "../assets/wrappers/CocktailList";
import Cocktail from "./Cocktail";

const CocktailList = ({ drinks }) => {
	if (!drinks) {
		return <h4 style={{ textAlign: "center" }}>No matching cocktails found</h4>;
	}

	const formattedDrinks = drinks.map((item) => {
		const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;

		return {
			id: idDrink,
			name: strDrink,
			image: strDrinkThumb,
			info: strAlcoholic,
			glass: strGlass,
		};
	});

	return (
		<Wrapper>
			{formattedDrinks.map((item) => {
				return <Cocktail key={item.id} {...item} />;
			})}
		</Wrapper>
	);
};
export default CocktailList;
