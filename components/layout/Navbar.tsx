import tw from "twin.macro";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { AppContext } from "../../utils/AppContext";
import { useContext } from "react";

const Container = tw.header`sticky top-0 z-10 px-3 py-5`;
const NavWrapper = tw.nav`max-w-[850px] mx-auto flex items-center justify-between text-3xl py-2 px-3 bg-biege-2/95 border border-biege-4 shadow-biege-4/75 shadow-[4.5px_4.5px]`;
const AppTitle = tw.h1`font-light`;
const CartButton = tw.button`flex`;
const CartCountBlip = tw.span`text-xs relative bg-biege-4 text-amber-100 h-[1.25rem] w-[1.25rem] leading-[1.25rem] -translate-y-1 translate-x-[190%] rounded-full`;

const Navbar = () => {
	const appContext = useContext(AppContext);
	if (!appContext) return null;
	const { cartItems } = appContext;

	return (
		<Container>
			<NavWrapper>
				<Link href="/">
					<AppTitle>tonoyShop.</AppTitle>
				</Link>
				<CartButton>
					{cartItems.length > 0 && (
						<CartCountBlip>{cartItems.length}</CartCountBlip>
					)}
					<AiOutlineShoppingCart />
				</CartButton>
			</NavWrapper>
		</Container>
	);
};
export default Navbar;
