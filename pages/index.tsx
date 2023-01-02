import { useState } from "react";
import tw from "twin.macro";
import { sanityClient } from "../utils/sanity";
import { ProductsType } from "../types/dataTypes";

type Props = {
	products: ProductsType;
};
const Home = ({ products }: Props) => {
	const Container = tw.div`h-screen grid place-items-center bg-biege-1`;
	const ProductsListWrapper = tw.div`border p-2 space-y-2 rounded border-biege-4`;
	const ProductContainer = tw.div`border p-1 rounded border-biege-4 text-brown-4`;

	return (
		<Container>
			<ProductsListWrapper>
				{products.map((product) => (
					<ProductContainer key={product._id}>
						{product.name}
					</ProductContainer>
				))}
			</ProductsListWrapper>
		</Container>
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
