
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Hero = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )
    const images = [
        'https://nurseryplantsbd.com/wp-content/uploads/2022/02/food.webp',
        'https://nurseryplantsbd.com/wp-content/uploads/2022/02/collection.webp',
        'https://nurseryplantsbd.com/wp-content/uploads/2022/02/food.webp',
    ]
    return (
        <div className="max-w-6xl">
            <Carousel
                plugins={[plugin.current]}
                className="max-w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {images.map((src, index) => (
                        <CarouselItem key={index}>
                            <div className="">
                                <Card className="py-5">
                                    <CardContent className="flex items-center py-5 px-0 justify-center">
                                        {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                                        <img className="max-w-full" src={src} alt="" />

                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="lg:overflow-hidden hidden lg:block" />
                <CarouselNext className="lg:overflow-hidden hidden lg:bl" />
            </Carousel>


        </div>
    );
};

export default Hero;