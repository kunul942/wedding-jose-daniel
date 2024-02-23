import Image, { StaticImageData } from 'next/image';
import CarouselLibrary from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useAnimations } from '@/hooks';

export const GalleryCarousel = ({ carousel }: any) => {
    const { fadeOut } = useAnimations();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div
            className='w-[90%] sm:w-[80%] lg:w-[90%] mx-auto'
            data-aos={fadeOut}
        >
            <CarouselLibrary
                autoPlay={true}
                autoPlaySpeed={2000}
                infinite={true}
                showDots={false}
                arrows={true}
                responsive={responsive}
            >
                {carousel.map(({ img, id }: any) => (
                    <div
                        key={id}
                        className='my-12 sm:my-8 lg:mx-[10px] xl:my-[80px] xl:mx-[20px] 2xl:mx-[30px]'
                        data-aos={fadeOut}
                    >
                        <Image
                            priority
                            className='hoverEffect h-[600px] w-full object-center rounded-2xl object-cover sm:h-[700px] md:h-[600px] 2xl:h-[700px]'
                            width={3000}
                            height={3000}
                            src={img}
                            alt='image'
                        />
                    </div>
                ))}
            </CarouselLibrary>
        </div>
    );
};
