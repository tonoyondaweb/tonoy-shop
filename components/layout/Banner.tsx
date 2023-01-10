import tw, { styled } from "twin.macro";
import Image from "next/image";
import { BannerType } from "../../types/dataTypes";
import { useEffect, useState } from "react";
import { urlFor } from "../../utils/sanity";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type Props = {
  banners: BannerType[];
};

const ContainerGroup = styled.div.attrs({ className: "group" })``;
const Container = tw(ContainerGroup)`max-w-[900px] w-full mx-auto px-4 my-9`;
const CarouselWrapper = tw.div`border border-biege-4 shadow-[10px_10px_0_-4px] shadow-biege-4/80 flex overflow-x-hidden`;
const BannerImage = tw(Image)`w-full h-[400px] object-cover`;
const BannerItem = styled.div(({ currentIndex }: { currentIndex: number }) => [
  tw`w-full shrink-0 transition-all ease-in-out duration-500 -translate-x-0`,
  currentIndex === 0 && tw`-translate-x-0`,
  currentIndex > 0 && `transform: translate(-${currentIndex * 100}%)`,
]);
const BannerTitle = tw.span`absolute w-full max-w-[900px] translate-y-[177px] text-xl text-center font-semibold bg-biege-4/60 text-biege-1 px-3 py-2 sm:text-3xl`;
const ButtonWrapper = tw.div`absolute -translate-x-[1.1rem] -translate-y-[210px] w-full max-w-[900px] flex justify-between px-7`;
const SlideButton = tw.button`bg-biege-2 border border-biege-4 text-lg rounded-full p-1 hover:bg-biege-1 transition-all opacity-0 group-hover:opacity-100`;
const IndexWrapper = tw.div`absolute -translate-y-full py-4 -translate-x-[1.1rem] w-full max-w-[900px] flex justify-center gap-x-5`;
const IndexBlip = styled.button(
  ({ currentIndex, index }: { currentIndex: number; index: number }) => [
    tw`bg-biege-3/50 h-[0.5rem] w-[0.5rem] rounded-full hover:bg-biege-2/60 transition-all`,
    currentIndex === index && tw`bg-biege-2 hover:bg-biege-2 scale-[1.3]`,
  ]
);

const Banner = ({ banners }: Props) => {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [bannerIndex]);

  const nextSlide = () => {
    if (bannerIndex + 1 >= banners.length) setBannerIndex(0);
    else setBannerIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    if (bannerIndex - 1 < 0) setBannerIndex(banners.length - 1);
    else setBannerIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <Container>
      <CarouselWrapper>
        {banners.map((item) => (
          <BannerItem currentIndex={bannerIndex} key={item._id}>
            <BannerTitle>{item.title}</BannerTitle>
            <BannerImage
              src={urlFor(item.image).url()}
              alt={`Banner image for ${item.title}`}
              width={900}
              height={500}
              priority
            />
          </BannerItem>
        ))}
      </CarouselWrapper>
      <ButtonWrapper>
        <SlideButton onClick={prevSlide}>
          <AiOutlineLeft />
        </SlideButton>
        <SlideButton onClick={nextSlide}>
          <AiOutlineRight />
        </SlideButton>
      </ButtonWrapper>
      <IndexWrapper>
        {banners.map((item, index) => (
          <IndexBlip
            key={item._id}
            currentIndex={bannerIndex}
            index={index}
            onClick={() => setBannerIndex(index)}
          />
        ))}
      </IndexWrapper>
    </Container>
  );
};
export default Banner;
