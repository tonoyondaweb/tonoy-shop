import { useState } from "react";
import tw from "twin.macro";

type Props = {};
const index = (props: Props) => {
	const [count, setCount] = useState(0);

	const Container = tw.div`h-screen grid place-items-center bg-biege-1`;
	const CountIncrementButton = tw.button`bg-biege-2 border border-biege-3 text-brown-4 px-6 py-3 shadow-[0px_0px_10px_1px] shadow-brown-3 rounded-xl transition-all ease-out hover:scale-150 hover:shadow-[0px_0px_20px_5px] hover:shadow-brown-1`;

	return (
		<Container>
			<CountIncrementButton
				onClick={() => setCount((prevCount) => prevCount + 1)}
			>
				Count: {count}
			</CountIncrementButton>
		</Container>
	);
};
export default index;
