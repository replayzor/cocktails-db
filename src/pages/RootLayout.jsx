import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
	const navigation = useNavigation();

	const isPageLoading = navigation.state === "loading";

	return (
		<>
			<Navbar />
			<section className="page">
				{isPageLoading ? <div className="loading" /> : <Outlet />}
			</section>
		</>
	);
};
export default RootLayout;
