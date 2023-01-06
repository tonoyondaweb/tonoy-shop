import tw from "twin.macro";
import Image from "next/image";
import { BannerType } from "../../types/dataTypes";
import { useState } from "react";
import { urlFor } from "../../utils/sanity";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
	banners: BannerType[];
};

const Container = tw.div`max-w-[900px] w-full mx-auto px-4 py-9`;
const CarouselWrapper = tw.div`border border-biege-4 shadow-[10px_10px_0_-4px] shadow-biege-4/80`;
const BannerImage = tw(Image)`w-full h-[400px] object-cover`;
const BannerTitle = tw.p`text-xl font-semibold bg-biege-4 text-biege-1 py-2 sm:text-3xl`;

const Banner = ({ banners }: Props) => {
	return (
		<Container>
			<CarouselWrapper>
				<Carousel
					showThumbs={false}
					autoPlay
					infiniteLoop
					interval={15000}
					showArrows={false}
					showStatus={false}
				>
					{banners.map((item) => (
						<div key={item._id}>
							<BannerTitle>{item.title}</BannerTitle>
							<BannerImage
								src={urlFor(item.image).url()}
								alt={`Banner image for ${item.title}`}
								width={900}
								height={500}
								priority
							/>
						</div>
					))}
				</Carousel>
			</CarouselWrapper>
		</Container>
	);
};
export default Banner;
