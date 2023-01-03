import Head from "next/head";
import tw from "twin.macro";
import { sanityClient, urlFor } from "../../utils/sanity";
import Image from "next/image";
import { ProductType, ProductsType } from "../../types/dataTypes";
import { GetStaticPaths, GetStaticProps } from "next/types";
import AddToCart from "../../components/cart/AddToCart";
import ProductList from "../../components/products/ProductList";

type Props = {
	product: ProductType;
	otherProducts: ProductsType;
};

const Container = tw.div`min-h-[calc(100vh-5.74rem)] grid place-items-center`;
const ContentWrapper = tw.div`px-3 flex flex-col items-center placeholder-sky-700`;
const ProductWrapper = tw.div`w-full max-w-[900px] gap-x-5 py-3 md:flex md:py-11`;
const ProductInfo = tw.div`px-3 py-7 text-center flex-1 justify-center md:flex md:flex-col md:h-[calc(100vh-12.75rem)] md:sticky md:top-[8.7rem]`;
const ProductImage = tw(
	Image
)`w-[290px] mx-auto object-cover border border-biege-4 shadow-[10px_10px_0_-4px] shadow-biege-4/75`;
const Name = tw.h1`text-2xl`;
const Price = tw.span`text-xl font-semibold`;
const Description = tw.p`p-2 mb-7 md:hidden`;
const DescriptionMd = tw.p`max-w-[375px] mx-auto mt-10 text-center hidden p-2 md:block`;
const OtherProducts = tw.div`text-center mt-7`;

const ProductPage = ({ product, otherProducts }: Props) => {
	const { name, description, price } = product;
	return (
		<>
			<Head>
				<title>{`${name} - tonoyShop`}</title>
			</Head>
			<Container>
				<ContentWrapper>
					<ProductWrapper>
						<div>
							<ProductImage
								src={urlFor(product.image).url()}
								alt={`Picture of the ${product.name}`}
								height={500}
								width={500}
								priority
							/>
							<DescriptionMd>{description}</DescriptionMd>
						</div>
						<ProductInfo>
							<Name>{name}</Name>
							<Price>₹{price}</Price>
							<Description>{description}</Description>
							<AddToCart product={product} />
						</ProductInfo>
					</ProductWrapper>
					<OtherProducts>
						<h3>Other Products</h3>
						<ProductList products={otherProducts} />
					</OtherProducts>
				</ContentWrapper>
			</Container>
		</>
	);
};
export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
	const products = await sanityClient.fetch(`*[_type == "product"] {
		slug {current}
	}`);
	const paths = products?.map((product: ProductType) => {
		return {
			params: { slug: product.slug.current },
		};
	});
	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug;
	const product = await sanityClient.fetch(
		`*[_type == "product" && slug.current == '${slug}'][0]`
	);
	const otherProducts = await sanityClient.fetch(
		`*[_type == "product" && slug.current != '${slug}']`
	);
	return {
		props: {
			product,
			otherProducts,
		},
	};
};
