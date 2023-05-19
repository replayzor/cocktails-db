import { useGlobalContext } from "../context/context";

// components
import Loading from "../components/Loading";
import Cocktail from "./Cocktail";

const CocktailList = () => {
	const { data, isLoading } = useGlobalContext();

	if (isLoading) {
		return <Loading />;
	}

	if (data.length < 1) {
		return (
			<h2 className="section-title">
				no cocktails matched your search criteria
			</h2>
		);
	}

	return (
		<section className="section">
			<h2 className="section-title">cocktails</h2>
			<div className="cocktails-center">
				{data.map((item) => {
					return <Cocktail key={item.id} {...item} />;
				})}
			</div>
		</section>
	);
};
export default CocktailList;
