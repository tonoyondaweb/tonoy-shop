import tw from "twin.macro";
import Link from "next/link";
import { AiOutlineArrowRight, AiOutlineShoppingCart } from "react-icons/ai";

const Container = tw.div`min-h-[calc(100vh-5.74rem)] grid place-items-center`;
const Wrapper = tw.div`space-y-5 text-center`;

const FailText = tw.h4`text-2xl font-bold`;
const RedirectAnchor = tw(
	Link
)`flex items-center justify-center text-lg gap-x-3 bg-biege-2 p-3 border-[2px] border-biege-4 transition-all hover:bg-biege-3/50 hover:-translate-y-1 hover:shadow-biege-4 hover:shadow-[6px_6px_0_-2px]`;

const SuccessPage = () => {
	return (
		<Container>
			<Wrapper>
				<FailText>Something went wrong :(</FailText>
				<p>
					Your payment could not be completed. You can try checking
					out from the cart again.
				</p>
				<RedirectAnchor href="/cart">
					Go to cart
					<AiOutlineShoppingCart />
				</RedirectAnchor>
				<RedirectAnchor href="/">
					Continue Shopping
					<AiOutlineArrowRight />
				</RedirectAnchor>
			</Wrapper>
		</Container>
	);
};
export default SuccessPage;
