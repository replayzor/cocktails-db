import { Link, NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/NavBar";

const Navbar = () => {
	return (
		<Wrapper>
			<div className="nav-center">
				<Link to="/">
					<span className="first-word">Cocktails</span>
					<span className="logo">Database</span>
				</Link>
				<div className="nav-links">
					<NavLink to="/" className="nav-link">
						Home
					</NavLink>
					<NavLink to="about" className="nav-link">
						About
					</NavLink>
					<NavLink to="newsletter" className="nav-link">
						Newsletter
					</NavLink>
				</div>
			</div>
		</Wrapper>
	);
};

export default Navbar;
