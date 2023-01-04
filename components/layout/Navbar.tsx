import tw from "twin.macro";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import Link from "next/link";
import { AppContext } from "../../utils/AppContext";
import { useContext } from "react";
import { AppContextType } from "../../types/dataTypes";

const Container = tw.header`sticky top-0 z-10 px-3 py-5`;
const NavWrapper = tw.nav`max-w-[850px] mx-auto flex items-center justify-between text-3xl py-2 px-3 bg-biege-2/95 border border-biege-4 shadow-biege-4/75 shadow-[4.5px_4.5px]`;
const AppTitle = tw.h1`font-light`;
const CartAnchor = tw(Link)`flex`;
const CartCountBlip = tw.span`text-sm w-[1.2rem] h-[1.2rem] text-biege-1 bg-biege-4 leading-[1.2rem] rounded-full text-center translate-x-[190%] -translate-y-1 `;

const Navbar = () => {
	const appContext = useContext(AppContext) as AppContextType;
	const { cartItems } = appContext;

	return (
		<Container>
			<NavWrapper>
				<Link href="/">
					<AppTitle>tonoyShop.</AppTitle>
				</Link>
				<CartAnchor href="/cart">
					{cartItems.length > 0 && (
						<CartCountBlip>{cartItems.length}</CartCountBlip>
					)}
					<AiOutlineShoppingCart />
				</CartAnchor>
			</NavWrapper>
		</Container>
	);
};
export default Navbar;
