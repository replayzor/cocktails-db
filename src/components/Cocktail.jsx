import { Link } from "react-router-dom";

const Cocktail = ({ id, name, glass, info, image }) => {
	return (
		<article className="cocktail" key={id}>
			<div className="img-container">
				<img src={image} alt={name} />
			</div>
			<div className="cocktail-footer">
				<h3>Name: {name}</h3>
				<h4>Glass: {glass}</h4>
				<p>{info}</p>
				<Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
					details
				</Link>
			</div>
		</article>
	);
};
export default Cocktail;
