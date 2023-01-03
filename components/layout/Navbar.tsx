import tw from "twin.macro";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const Container = tw.header`sticky top-0 z-10 px-3 py-5`;
const NavWrapper = tw.nav`max-w-[850px] mx-auto flex items-center justify-between text-3xl py-2 px-3 bg-biege-2/95 border border-biege-4 shadow-biege-4/75 shadow-[7px_7px_0_0] rounded`;
const AppTitle = tw.h1`font-light`;

const Navbar = () => {
	return (
		<Container>
			<NavWrapper>
				<Link href="/">
					<AppTitle>tonoyShop.</AppTitle>
				</Link>
				<button>
					<AiOutlineShoppingCart />
				</button>
			</NavWrapper>
		</Container>
	);
};
export default Navbar;
