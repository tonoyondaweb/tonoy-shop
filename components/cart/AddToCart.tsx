import tw from "twin.macro";
import {
	AiFillShopping,
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineShoppingCart,
} from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";

type Props = {
	quantity: number;
	setQuanity: Dispatch<SetStateAction<number>>;
};

const Container = tw.div`w-full max-w-[400px] mx-auto flex border bg-biege-2 border-biege-4 rounded sticky bottom-6 text-lg gap-x-3 mt-7 p-3 shadow-[7px_7px] shadow-biege-4 md:static`;
const QuantityWrapper = tw.div`flex items-center border-[2px] border-biege-4 px-2 gap-x-1 flex-1 rounded`;
const Quantity = tw.span`flex-1 border-x-[2px] border-biege-4`;
const QuantitButtom = tw.button`flex-1 flex justify-center active:bg-biege-4`;
const AddToCartButton = tw.button`flex items-center justify-center gap-x-3 border-[2px] border-biege-4 rounded px-2 py-1 flex-1 transition-colors hover:bg-biege-3/50`;

const AddToCart = ({ quantity, setQuanity }: Props) => {
	const incrementQuantity = () =>
		setQuanity((prevQuantity) => prevQuantity + 1);
	const decrementQuantity = () => {
		if (quantity > 1) setQuanity((prevQuantity) => prevQuantity - 1);
	};

	return (
		<Container>
			<QuantityWrapper>
				<QuantitButtom onClick={decrementQuantity}>
					<AiOutlineMinus />
				</QuantitButtom>
				<Quantity>{quantity}</Quantity>
				<QuantitButtom onClick={incrementQuantity}>
					<AiOutlinePlus />
				</QuantitButtom>
			</QuantityWrapper>
			<AddToCartButton>
				<AiOutlineShoppingCart />
				Add to cart
			</AddToCartButton>
		</Container>
	);
};
export default AddToCart;
