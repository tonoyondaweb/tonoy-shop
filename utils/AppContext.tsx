import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import {
	AppContextType,
	CartItemType,
	CartItemsType,
	ProductType,
} from "../types/dataTypes";

type Props = {
	children: ReactNode;
};

export const AppContext = createContext<AppContextType | null>(null);
const AppContextProvider = ({ children }: Props) => {
	const initalRender = useRef(true);
	const [cartItems, setCartItems] = useState<CartItemsType | []>([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		const localCart = JSON.parse(localStorage.getItem("cart")!);
		if (localCart !== null) setCartItems(localCart);

		const localPrice = JSON.parse(localStorage.getItem("totalPrice")!);
		if (totalPrice !== null) setTotalPrice(localPrice);
	}, []);

	useEffect(() => {
		if (initalRender.current) initalRender.current = false;
		else {
			localStorage.setItem("cart", JSON.stringify(cartItems));
			localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
		}
	}, [cartItems]);

	const addToCart = (product: ProductType, quantity: number) => {
		const checkInCart = cartItems.find((item) => item._id === product._id);
		setTotalPrice((prevPrice) => prevPrice + product.price * quantity);

		if (checkInCart) {
			setCartItems((prevItems) =>
				prevItems.map((item) => {
					if (item._id === product._id)
						return { ...item, quantity: item.quantity + quantity };
					else return { ...item };
				})
			);
		} else {
			setCartItems((prevCartItem) => {
				return [
					...prevCartItem,
					{
						...product,
						quantity,
					},
				];
			});
		}
	};

	const deleteItem = (cartItem: CartItemType) => {
		setTotalPrice(
			(prevPrice) => prevPrice - cartItem.price * cartItem.quantity
		);
		setCartItems((prevCartItem) =>
			prevCartItem.filter((item) => item._id !== cartItem._id)
		);
	};

	const emptyCart = () => {
		setCartItems([]);
		setTotalPrice(0);
		localStorage.setItem("cart", JSON.stringify(cartItems));
		localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
	};

	return (
		<AppContext.Provider
			value={{
				cartItems,
				totalPrice,
				addToCart,
				deleteItem,
				emptyCart,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
export default AppContextProvider;
