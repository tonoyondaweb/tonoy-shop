import tw from "twin.macro";
import { ProductsType } from "../../types/dataTypes";
import ProductCard from "./ProductCard";

type Props = {
	products: ProductsType;
};

const Container = tw.div`max-w-[500px] grid grid-cols-2 gap-3 py-5 px-3 items-stretch md:max-w-[750px] md:grid-cols-3 md:gap-5`;

const ProductList = ({ products }: Props) => {
	return (
		<Container>
			{products.map((product) => (
				<ProductCard key={product._id} product={product} />
			))}
		</Container>
	);
};
export default ProductList;
