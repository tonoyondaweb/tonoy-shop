import { Dispatch, SetStateAction } from "react";
import tw from "twin.macro";

type Props = {
	setCurrentTab: Dispatch<SetStateAction<string>>;
};

const Container = tw.ul`flex justify-between text-xs min-[425px]:text-base`;
const Tabs = ({ setCurrentTab }: Props) => {
	return (
		<Container>
			<li>
				<button onClick={() => setCurrentTab("all")}>
					All Products
				</button>
			</li>
			<li>
				<button onClick={() => setCurrentTab("best-sellers")}>
					Best Sellers
				</button>
			</li>
			<li>
				<button onClick={() => setCurrentTab("top-rated")}>
					Top Rated
				</button>
			</li>
			<li>
				<button onClick={() => setCurrentTab("new-arrival")}>
					New Arrivals
				</button>
			</li>
		</Container>
	);
};
export default Tabs;
