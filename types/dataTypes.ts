import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type ProductType = {
	_id: string;
	name: string;
	image: SanityImageSource;
	description: string;
	price: number;
};

export type ProductsType = ProductType[];
