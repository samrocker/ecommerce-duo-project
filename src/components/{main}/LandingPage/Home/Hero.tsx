"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Sliderimg0 from "../../../../../public/assets/slider/slider0.jpg";
import Sliderimg1 from "../../../../../public/assets/slider/slider1.jpg";
import Sliderimg2 from "../../../../../public/assets/slider/slider2.jpg";
import Sliderimg3 from "../../../../../public/assets/slider/slider3.jpg";
import Autoplay from "embla-carousel-autoplay";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section>
      <main className="max-w-[1480px] m-auto">
        <div className="h-screen w-full flex-between flex-col">
          <div className="flex-[1] w-full flex items-start justify-center enter flex-col px-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-3xl">
            <h1 className="text-xl font-bold text-white">All Departments</h1>
            <p className="text-white text-md font-medium">
              Total 1000+ Products
            </p>
          </div>
          <div className="flex-[12] flex gap-5 items-start justify-center">
            <div className="h-[75%] flex-[1] flex-between flex-col border-2 border-black">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <div className="flex-center flex-col">
                    <NavigationMenuTrigger>beauty</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    <NavigationMenuTrigger>beauty</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    <NavigationMenuTrigger>beauty</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    <NavigationMenuTrigger>beauty</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    </div>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="h-[75%] flex-[3] flex">
              <Carousel
                className="h-full w-full flex"
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent className="h-full w-full flex-between">
                  <CarouselItem className="h-full w-full">
                    <Image
                      src={Sliderimg0}
                      alt="Slider Image 1"
                      className="h-full w-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem className="h-full w-full">
                    <Image
                      src={Sliderimg1}
                      alt="Slider Image 1"
                      className="h-full w-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem className="h-full w-full">
                    <Image
                      src={Sliderimg2}
                      alt="Slider Image 1"
                      className="h-full w-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem className="h-full w-full">
                    <Image
                      src={Sliderimg3}
                      alt="Slider Image 1"
                      className="h-full w-full object-cover"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
