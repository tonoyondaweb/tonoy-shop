import Head from "next/head";
import tw from "twin.macro";

type Props = {};

import { AiOutlineArrowRight } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import { useContext } from "react";
import { AppContext } from "../utils/AppContext";
import { AppContextType } from "../types/dataTypes";
import CartItem from "../components/cart/CartItem";
import Link from "next/link";

const Container = tw.div`min-h-[calc(100vh-5.74rem)] flex flex-col justify-between`;
const CartItemsWrapper = tw.div`flex-1 flex p-5`;
const CheckOutWrapper = tw.div`border-t-[2px] border-biege-4 p-5 sticky bottom-0 bg-biege-2`;
const EmptyCartWrapper = tw.div`border flex-1 text-3xl grid place-items-center`;
const HomeRedirectAnchor = tw(
	Link
)`mt-5 flex items-center justify-center text-lg gap-x-3 bg-biege-2 p-3 border-[2px] border-biege-4 transition-all hover:bg-biege-3/50 hover:-translate-y-1 hover:shadow-biege-4 hover:shadow-[6px_6px_0_-2px]`;

const Title = tw.h1`text-3xl font-bold px-5 py-2`;
const CheckoutButton = tw.button`w-full max-w-[500px] mx-auto flex items-center justify-center text-lg gap-x-3 bg-biege-2 p-3 border-[2px] border-biege-4 transition-all hover:bg-biege-3/50 hover:-translate-y-1 hover:shadow-biege-4 hover:shadow-[6px_6px_0_-2px]`;

const Cart = (props: Props) => {
	const { cartItems, totalPrice } = useContext(AppContext) as AppContextType;

	return (
		<>
			<Head>
				<title>Cart - tonoyShop</title>
			</Head>
			<Container>
				<Title>Your Cart</Title>
				<CartItemsWrapper>
					{cartItems.length > 0 ? (
						cartItems.map((item) => (
							<CartItem key={item._id} item={item} />
						))
					) : (
						<EmptyCartWrapper>
							<div>
								<span>Your cart is empty :(</span>
								<HomeRedirectAnchor href="/">
									Continue shopping
									<AiOutlineArrowRight />
								</HomeRedirectAnchor>
							</div>
						</EmptyCartWrapper>
					)}
				</CartItemsWrapper>
				{cartItems.length > 0 && (
					<CheckOutWrapper>
						<CheckoutButton>
							<span>Total: ₹{totalPrice}</span>
							<RxDividerVertical />
							Check Out
							<AiOutlineArrowRight />
						</CheckoutButton>
					</CheckOutWrapper>
				)}
			</Container>
		</>
	);
};
export default Cart;
