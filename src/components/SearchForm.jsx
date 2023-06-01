import { useEffect, useRef } from "react";

const SearchForm = () => {
	const searchValue = useRef(null);

	// const searchCocktail = () => {
	// 	setSearchTerm(searchValue.current.value);
	// };

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		searchValue.current.focus();
	}, []);

	return (
		<section className="section search">
			<form className="search-form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="name">search your favorite cocktail</label>
					<input
						type="text"
						id="name"
						name="name"
						ref={searchValue}
						// onChange={searchCocktail}
					/>
				</div>
			</form>
		</section>
	);
};
export default SearchForm;
