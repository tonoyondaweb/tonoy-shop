import { ReactNode } from "react";
import tw from "twin.macro";
import Navbar from "./Navbar";

type Props = {
	children: ReactNode;
};

const Container = tw.div`min-h-screen bg-biege-1 text-brown-4`;
const Layout = ({ children }: Props) => {
	return (
		<Container>
			<Navbar />
			{children}
		</Container>
	);
};
export default Layout;
