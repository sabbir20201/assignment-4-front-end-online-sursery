
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
        Autoplay({ delay: 1000, stopOnInteraction: true })
    )
    const images = [
        'https://images.unsplash.com/photo-1712496587611-c4750b815998?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1616068527635-95897b8a5555?q=80&w=1314&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1616068527635-95897b8a5555?q=80&w=1314&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        
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
                                    <CardContent className="flex h-[600px] items-center justify-center">
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