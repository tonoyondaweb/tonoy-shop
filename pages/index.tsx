import tw, { styled } from "twin.macro";
import { sanityClient } from "../utils/sanity";
import { ProductsType } from "../types/dataTypes";
import ProductList from "../components/products/ProductList";
import Head from "next/head";
import { useState } from "react";
import Tabs from "../components/products/Tabs";
import ProductListFilter from "../components/products/ProductListFilter";

type Props = {
	products: ProductsType;
};

type TabIndicatorProps = {
	currentTab: string;
};

const Container = tw.div`min-h-[calc(100vh-5.74rem)]`;
const TabWrapper = tw.div`px-3 w-[320px] mx-auto min-[425px]:w-[425px]`;
const TabSelector = styled.div(({ currentTab }: TabIndicatorProps) => [
	tw`w-[70px] border-[2px] border-biege-4 transition ease-out min-[425px]:w-[90px]`,
	currentTab === "all" && ``,
	currentTab === "best-sellers" &&
		tw`translate-x-[110%] min-[425px]:translate-x-[120%]`,
	currentTab === "top-rated" &&
		tw`translate-x-[215%] min-[425px]:translate-x-[230%]`,
	currentTab === "new-arrival" &&
		tw`translate-x-[320%] min-[425px]:translate-x-[345%]`,
]);

const Home = ({ products }: Props) => {
	const [currentTab, setCurrentTab] = useState("all");

	currentTab === "all"
		? ""
		: currentTab === "bestSellers"
		? "translate-x-100"
		: "translate-x-50";
	return (
		<>
			<Head>
				<title>tonoyShop - Home</title>
			</Head>
			<Container>
				<TabWrapper>
					<Tabs setCurrentTab={setCurrentTab} />
					<TabSelector currentTab={currentTab} />
				</TabWrapper>
				{currentTab === "all" ? (
					<ProductList products={products} />
				) : (
					<ProductListFilter
						category={currentTab}
						products={products}
					/>
				)}
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
