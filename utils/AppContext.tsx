import { ReactNode, createContext, useContext, useState } from "react";
import { AppContextType, CartItemsType, ProductType } from "../types/dataTypes";

type Props = {
	children: ReactNode;
};

export const AppContext = createContext<AppContextType | null>(null);
const AppContextProvider = ({ children }: Props) => {
	const [displayCart, setDisplayCart] = useState(false);
	const [cartItems, setCartItems] = useState<CartItemsType | []>([]);
	const [totalPrice, setTotalPrice] = useState(0);

	const addToCart = (product: ProductType, quantity: number) => {
		const checkInCart = cartItems.find((item) => item._id === product._id);

		if (checkInCart) {
			setTotalPrice((prevPrice) => prevPrice + product.price * quantity);
			setCartItems((prevItems) =>
				prevItems.map((item) => {
					if (item._id === product._id)
						return { ...item, quantity: item.quantity + quantity };
					else return { ...item };
				})
			);
		} else
			setCartItems((prevCartItem) => {
				return [
					...prevCartItem,
					{
						...product,
						quantity,
					},
				];
			});
	};

	return (
		<AppContext.Provider
			value={{ displayCart, cartItems, totalPrice, addToCart }}
		>
			{children}
		</AppContext.Provider>
	);
};
export default AppContextProvider;
