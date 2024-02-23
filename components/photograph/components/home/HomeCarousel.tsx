import CarouselLibrary from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { homeCarouselImages } from '@/constant';
import Image from 'next/image';

export const HomeCarousel = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
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
        <div>
            <CarouselLibrary
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
                showDots={false}
                responsive={responsive}
            >
                {homeCarouselImages.map(({ img, id }) => (
                    <div key={id}>
                        <Image
                            width={5000}
                            height={5000}
                            src={img}
                            alt='image'
                            className='h-[590px]  object-center w-full object-cover shadow-xl sm:h-[800px] 2xl:h-[1000px]'
                        />
                    </div>
                ))}
            </CarouselLibrary>
        </div>
    );
};
