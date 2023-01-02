import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<GlobalStyles />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
