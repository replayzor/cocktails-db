import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/context.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<QueryClientProvider client={queryClient}>
		<AppProvider>
			<App />
		</AppProvider>
	</QueryClientProvider>
);
