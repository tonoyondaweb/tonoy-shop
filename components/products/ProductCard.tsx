import tw from "twin.macro";
import { ProductType } from "../../types/dataTypes";
import { urlFor } from "../../utils/sanity";
import Link from "next/link";

type Props = {
	product: ProductType;
};

const LinkContainer = tw(Link)``;
const Container = tw.div`h-full border border-biege-4 rounded-xl transition-all hover:bg-biege-2 hover:-translate-y-1 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]`;
const ProductImage = tw.img`aspect-square object-cover rounded-t-xl`;
const Details = tw.div`flex flex-col p-3`;
const Name = tw.span`text-lg whitespace-nowrap overflow-hidden text-ellipsis`;
const Price = tw.span`text-xl font-semibold`;

const ProductCard = ({ product }: Props) => {
	const { name, image, price, slug } = product;
	return (
		<LinkContainer href={`/products/${slug.current}`}>
			<Container>
				<ProductImage src={urlFor(image).url()} />
				<Details>
					<Name>{name}</Name>
					<Price>{price}</Price>
				</Details>
			</Container>
		</LinkContainer>
	);
};
export default ProductCard;
