import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type ProductType = {
	_id: string;
	name: string;
	image: SanityImageSource;
	description: string;
	price: number;
	slug: { current: string };
	category: string;
};

export type ProductsType = ProductType[];

export interface CartItemType extends ProductType {
	quantity: number;
}

export type CartItemsType = CartItemType[];

export type AppContextType = {
	cartItems: CartItemsType;
	totalPrice: number;
	addToCart: (product: ProductType, quantity: number) => void;
	deleteItem: (cartItem: CartItemType) => void;
	emptyCart: () => void;
};
