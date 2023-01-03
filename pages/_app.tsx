import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import Layout from "../components/layout/Layout";
import AppContextProvider from "../utils/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppContextProvider>
			<Layout>
				<GlobalStyles />
				<Component {...pageProps} />
			</Layout>
		</AppContextProvider>
	);
}

export default MyApp;
