import tw from "twin.macro";
import { ProductsType } from "../../types/dataTypes";
import ProductCard from "./ProductCard";

type Props = {
	products: ProductsType;
	category: string;
};

const Container = tw.div`max-w-[500px] mx-auto grid grid-cols-2 gap-4 py-5 px-3 items-stretch md:max-w-[750px] md:grid-cols-3 md:gap-5`;

const ProductListFilter = ({ products, category }: Props) => {
	const filteredProduct = products.filter(
		(product) => product.category === category
	);
	return (
		<Container>
			{filteredProduct.map((product) => (
				<ProductCard key={product._id} product={product} />
			))}
		</Container>
	);
};
export default ProductListFilter;
