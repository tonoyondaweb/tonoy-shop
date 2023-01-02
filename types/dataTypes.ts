import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type ProductType = {
	_id: string;
	name: string;
	image: SanityImageSource;
	description: string;
	price: number;
	slug: { current: string };
};

export type ProductsType = ProductType[];
