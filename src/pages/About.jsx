const About = () => {
	return (
		<section className="section about-section">
			<h1 className="section-title">about us</h1>
			<p>
				"Welcome to Cocktails Database! We are passionate about cocktails and
				dedicated to providing you with a comprehensive collection of drink
				recipes and information. Our website utilizes the power of the{" "}
				<a
					href="https://www.thecocktaildb.com/"
					target="_blank"
					rel="noreferrer"
					className="link"
				>
					CocktailDB API
				</a>{" "}
				to bring you a vast array of cocktail recipes from around the world.
				Whether you're a mixology enthusiast, a bartender, or simply someone who
				enjoys a good drink, you'll find inspiration and guidance here. Explore
				our database, discover new cocktail creations, and learn the art of
				mixing drinks. Cheers to endless possibilities!"
			</p>
		</section>
	);
};
export default About;
