import { createGlobalStyle } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle({
	body: {
		WebkitTapHighlightColor: theme`colors.biege.2`,
		...tw`antialiased`,
		...tw`bg-biege-1`,
	},
});

const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
);

export default GlobalStyles;
