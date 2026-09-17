import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { StaticImageData } from 'next/image';

interface Props {
    images: StaticImageData[];
    interval?: number;
    className?: string;
}

export const FadeCarousel = ({
    images,
    interval = 4500,
    className = '',
}: Props) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {images.map((img, index) => (
                <Image
                    key={index}
                    src={img}
                    alt='wedding jose daniel'
                    priority={index === 0}
                    quality={70}
                    sizes='(max-width: 768px) 90vw, 620px'
                    className={`hero__slide absolute inset-0 h-full w-full object-cover ${
                        index === current ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}
        </div>
    );
};
