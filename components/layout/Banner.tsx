import tw from "twin.macro";
import Image from "next/image";
import { BannerType } from "../../types/dataTypes";
import { useState } from "react";
import { urlFor } from "../../utils/sanity";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type Props = {
	banners: BannerType[];
};

const Container = tw.div`max-w-[900px] w-full mx-auto pt-9 px-5`;
const BannerImage = tw(
	Image
)`w-full h-[400px] object-cover border border-biege-4 shadow-[10px_10px_0_-4px] shadow-biege-4/75`;
const BannerTitle = tw.span`absolute pl-10 pr-3 py-2 text-xl font-semibold bg-biege-4 text-biege-2 translate-y-[-225px] sm:text-3xl`;
const SlideButton = tw.button`bg-biege-2 p-1 rounded-full`;
const ButtonWrapper = tw.div`flex w-full justify-between px-2 relative translate-y-[-215px]`;

const Banner = ({ banners }: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		if (currentIndex + 1 >= banners.length) setCurrentIndex(0);
		else setCurrentIndex((currentIndex) => currentIndex + 1);
	};

	const prevSlide = () => {
		if (currentIndex > 0)
			setCurrentIndex((currentIndex) => currentIndex - 1);
		else setCurrentIndex(banners.length - 1);
	};

	return (
		<Container>
			<BannerImage
				src={urlFor(banners[currentIndex].image).url()}
				alt={`Banner for ${banners[currentIndex].title}`}
				width={900}
				height={500}
			/>
			<BannerTitle>{banners[currentIndex].title}</BannerTitle>
			<ButtonWrapper>
				<SlideButton onClick={prevSlide}>
					<AiOutlineArrowLeft />
				</SlideButton>
				<SlideButton onClick={nextSlide}>
					<AiOutlineArrowRight />
				</SlideButton>
			</ButtonWrapper>
		</Container>
	);
};
export default Banner;
