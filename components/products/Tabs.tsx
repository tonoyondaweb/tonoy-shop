import { Dispatch, SetStateAction } from "react";
import tw, { styled } from "twin.macro";

type Props = {
	currentTab: string;
	setCurrentTab: Dispatch<SetStateAction<string>>;
};

const Container = tw.ul`flex gap-x-4 w-max mx-auto text-sm sm:text-base md:gap-x-12`;
const Tab = styled.li(
	({ currentTab, value }: { currentTab: string; value: string }) => [
		tw`border-b-[4px] border-b-transparent transition-colors`,
		currentTab === value && tw`border-biege-4`,
	]
);

const tabs = [
	{
		name: "All Products",
		value: "all",
	},
	{
		name: "Best Sellers",
		value: "best-sellers",
	},
	{
		name: "Top Rated",
		value: "top-rated",
	},
	{
		name: "New Arrivals",
		value: "new-arrival",
	},
];

const Tabs = ({ setCurrentTab, currentTab }: Props) => {
	return (
		<Container>
			{tabs.map((tab, index) => (
				<Tab key={index} currentTab={currentTab} value={tab.value}>
					<button onClick={() => setCurrentTab(tab.value)}>
						{tab.name}
					</button>
				</Tab>
			))}
		</Container>
	);
};
export default Tabs;
