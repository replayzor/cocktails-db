import { Link, useRouteError } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import Navbar from "../components/Navbar";

const Error = () => {
	const { isError } = useGlobalContext();
	const { data } = useRouteError();

	if (!isError) {
		return (
			<>
				<Navbar />
				<section className="error-page section">
					<div className="error-container">
						<h1>opps! no page found</h1>
						<p style={{ color: "red" }}>{data}</p>
						<Link to="/" className="btn btn-primary">
							back home
						</Link>
					</div>
				</section>
			</>
		);
	}
};
export default Error;
