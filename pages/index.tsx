import tw from "twin.macro";
import { sanityClient } from "../utils/sanity";
import { ProductsType } from "../types/dataTypes";
import ProductList from "../components/products/ProductList";
import Head from "next/head";

type Props = {
	products: ProductsType;
};

const Container = tw.div`min-h-[calc(100vh-3.24rem)] grid place-items-center`;

const Home = ({ products }: Props) => {
	return (
		<>
			<Head>
				<title>tonoyShop - Home</title>
			</Head>
			<Container>
				<ProductList products={products} />
			</Container>
		</>
	);
};
export default Home;

export async function getServerSideProps() {
	const products = await sanityClient.fetch(`*[_type == "product"]`);
	return {
		props: {
			products,
		},
	};
}
