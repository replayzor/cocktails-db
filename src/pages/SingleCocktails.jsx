import { Link } from "react-router-dom";

const SingleCocktails = () => {
	return (
		<section className="section cocktail-section">
			<Link to="/" className="btn btn-primary">
				back home
			</Link>
			<h2 className="section-title">cocktail name</h2>
			<div className="drink">
				<img src="" alt="" />
				<div className="drink-info">{/* map over drink info */}</div>
			</div>
		</section>
	);
};
export default SingleCocktails;
