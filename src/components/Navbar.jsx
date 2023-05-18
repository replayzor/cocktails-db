import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<Link to="/">
					<span className="first-word">Cocktails</span>
					<span className="second-word">Database</span>
				</Link>
				<ul className="nav-links">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;
