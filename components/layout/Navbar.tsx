import tw from "twin.macro";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const Container = tw.div`shadow-[0_2px_5px_1px_rgb(0,0,0,0.2)] sticky top-0 bg-biege-2 z-10`;
const NavWrapper = tw.nav`max-w-[900px] mx-auto flex items-center justify-between text-3xl py-2 px-3`;
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
