import tw from "twin.macro";
import { BiTrashAlt } from "react-icons/bi";
import { AppContextType, CartItemType } from "../../types/dataTypes";
import { useContext } from "react";
import { AppContext } from "../../utils/AppContext";
import Link from "next/link";
import { urlFor } from "../../utils/sanity";
import Image from "next/image";

type Props = {
	item: CartItemType;
};

const Container = tw.div`max-w-[900px] mx-auto border-b border-biege-4 p-3`;
const TitleWrapper = tw.div`flex gap-x-7 justify-between`;
const PriceWrap = tw.div`text-lg flex gap-x-[0.5rem] justify-between mt-3`;
const ProductImage = tw(
	Image
)`w-[80px] aspect-square object-cover mb-2 shadow-biege-4 shadow-[5px_5px_0_-2px]`;
const Title = tw.span`whitespace-nowrap overflow-hidden text-ellipsis text-xl font-semibold`;
const DeleteButton = tw.button`text-2xl outline-none`;

const CartItem = ({ item }: Props) => {
	const { deleteItem } = useContext(AppContext) as AppContextType;

	const { name, price, quantity, slug, image } = item;
	return (
		<Container>
			<TitleWrapper>
				<Link href={`/products/${slug.current}`}>
					<ProductImage
						src={urlFor(image).url()}
						height={100}
						width={100}
						alt={`Picture of ${name}`}
					/>
					<Title>{name}</Title>
				</Link>
				<DeleteButton onClick={() => deleteItem(item)}>
					<BiTrashAlt />
				</DeleteButton>
			</TitleWrapper>
			<PriceWrap>
				<div>
					<span>₹{price}</span>
					<span>x {quantity}</span>
				</div>
				<span>Total: {price * quantity}</span>
			</PriceWrap>
		</Container>
	);
};
export default CartItem;
