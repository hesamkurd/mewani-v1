import * as React from "react"


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    Card, CardContent,
} from "@/components/ui"

import img1 from './images/one.webp'
import img2 from './images/two.jpg'
import img3 from './images/three.webp'
import img4 from './images/four.jpg'
import Image from "next/image";

function Banner() {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                {[img1, img2, img3, img4].map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent
                                    className="relative aspect-square h-[480px] w-full flex items-center justify-center p-6">
                                    <Image src={image} alt='banner' fill className='object-cover'/>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    )
}

export default Banner