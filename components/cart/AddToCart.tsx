import tw from "twin.macro";
import {
	AiFillShopping,
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineShoppingCart,
} from "react-icons/ai";
import {
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react";
import { AppContext } from "../../utils/AppContext";
import { AppContextType, ProductType } from "../../types/dataTypes";

type Props = {
	product: ProductType;
};

const Container = tw.div`w-full max-w-[400px] mx-auto flex border bg-biege-2 border-biege-4 sticky bottom-6 text-lg gap-x-3 p-3 shadow-[5px_5px_0_-1px] shadow-biege-4 md:static md:mt-5 md:bg-transparent`;
const QuantityWrapper = tw.div`flex items-center border-[2px] border-biege-4 px-2 gap-x-1 flex-1`;
const Quantity = tw.span`flex-1 border-x-[2px] border-biege-4`;
const QuantityButton = tw.button`flex-1 flex justify-center my-2 py-2 transition-colors active:bg-biege-4 hover:bg-biege-3/50`;
const AddToCartButton = tw.button`flex items-center justify-center gap-x-3 border-[2px] border-biege-4 px-2 py-1 flex-1 transition-colors hover:bg-biege-3/50`;

const AddToCart = ({ product }: Props) => {
	const { addToCart } = useContext(AppContext) as AppContextType;

	const [quantity, setQuantity] = useState(1);
	useEffect(() => {
		setQuantity(1);
	}, [product]);

	const incrementQuantity = () =>
		setQuantity((prevQuantity) => prevQuantity + 1);
	const decrementQuantity = () => {
		if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
	};

	return (
		<Container>
			<QuantityWrapper>
				<QuantityButton onClick={decrementQuantity}>
					<AiOutlineMinus />
				</QuantityButton>
				<Quantity>{quantity}</Quantity>
				<QuantityButton onClick={incrementQuantity}>
					<AiOutlinePlus />
				</QuantityButton>
			</QuantityWrapper>
			<AddToCartButton
				onClick={() => {
					addToCart(product, quantity);
					setQuantity(1);
				}}
			>
				<AiOutlineShoppingCart />
				Add to cart
			</AddToCartButton>
		</Container>
	);
};
export default AddToCart;
