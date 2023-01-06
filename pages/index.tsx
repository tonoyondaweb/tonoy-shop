import tw, { styled } from "twin.macro";
import { sanityClient } from "../utils/sanity";
import { BannerType, ProductsType } from "../types/dataTypes";
import ProductList from "../components/products/ProductList";
import Head from "next/head";
import { useState } from "react";
import Tabs from "../components/products/Tabs";
import ProductListFilter from "../components/products/ProductListFilter";
import Banner from "../components/layout/Banner";

type Props = {
	products: ProductsType;
	banners: BannerType[];
};

type TabIndicatorProps = {
	currentTab: string;
};

const Container = tw.div`min-h-[calc(100vh-5.74rem)]`;
const TabWrapper = tw.div`px-2 py-2 max-w-[500px] mx-auto overflow-x-scroll`;

const Home = ({ products, banners }: Props) => {
	const [currentTab, setCurrentTab] = useState("all");
	return (
		<>
			<Head>
				<title>tonoyShop - Home</title>
			</Head>
			<Container>
				<Banner banners={banners} />
				<TabWrapper>
					<Tabs
						currentTab={currentTab}
						setCurrentTab={setCurrentTab}
					/>
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
	const banners = await sanityClient.fetch(`*[_type == "banner"]`);

	return {
		props: {
			products,
			banners,
		},
	};
}
