import { useContext, useEffect } from "react";
import tw from "twin.macro";
import { AppContext } from "../utils/AppContext";
import { AppContextType } from "../types/dataTypes";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const Container = tw.div`min-h-[calc(100vh-5.74rem)] grid place-items-center`;
const Wrapper = tw.div`space-y-5 text-center`;

const SuccessText = tw.h4`text-2xl font-bold`;
const HomeRedirectAnchor = tw(
	Link
)`flex items-center justify-center text-lg gap-x-3 bg-biege-2 p-3 border-[2px] border-biege-4 transition-all hover:bg-biege-3/50 hover:-translate-y-1 hover:shadow-biege-4 hover:shadow-[6px_6px_0_-2px]`;

const SuccessPage = () => {
	const { emptyCart } = useContext(AppContext) as AppContextType;

	useEffect(() => {
		emptyCart();
	}, []);

	return (
		<Container>
			<Wrapper>
				<SuccessText>Payment Successful!</SuccessText>
				<p>Your payment is completed and we have taken your order</p>
				<p>Thank you for shopping with us!</p>
				<HomeRedirectAnchor href="/">
					Continue Shopping
					<AiOutlineArrowRight />
				</HomeRedirectAnchor>
			</Wrapper>
		</Container>
	);
};
export default SuccessPage;
