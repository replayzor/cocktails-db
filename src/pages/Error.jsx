import { Link, useRouteError } from "react-router-dom";

import errorImage from "../assets/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
	const error = useRouteError();

	if (error.status === 404) {
		return (
			<Wrapper>
				<div>
					<img src={errorImage} alt="not found" />
					<p>We can't seem to find page you are looking for</p>
					<p style={{ color: "red" }}>{error.data}</p>
					<Link to="/">back home</Link>
				</div>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<div>
				<h3>Something went wrong</h3>
			</div>
		</Wrapper>
	);
};
export default Error;
