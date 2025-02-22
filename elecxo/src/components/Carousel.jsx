import { Carousel } from "@material-tailwind/react";
 
export function CarouselCustomNavigation() {
  return (
    <div className="h-[250px] w-full lg:w-full lg:h-[350px] mx-auto  ">
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://img.global.news.samsung.com/in/wp-content/uploads/2023/10/1000x563.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.freepik.com/premium-vector/home-appliances-electronics-store-template-banner-design_958026-99.jpg"
        alt="image 2"
        className="h-full w-full "
      />
      <img
        src="https://img.global.news.samsung.com/in/wp-content/uploads/2020/10/Master-banner-Horizontal.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
    </div>
  );
}