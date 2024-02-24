import { joseDaniel2, joseDanielImage1, joseDanielImage2 } from '@/assets';
import { useAnimations } from '@/hooks';
import Image from 'next/image';

export const CollageImages = () => {
    const { fadeOut } = useAnimations();

    return (
        <div
            className='relative flex flex-col mt-[3rem] pb-[2rem]'
            data-aos={fadeOut}
        >
            <Image
                height={3000}
                width={3000}
                src={joseDanielImage1}
                alt='image'
                className='w-[70%] h-[450px] object-cover md:w-[40%] md:h-[800px] rounded-2xl'
            />
            <Image
                height={3000}
                width={3000}
                src={joseDanielImage2}
                alt='image'
                className='absolute w-[50%] h-[250px] top-[3%] object-cover rounded-2xl right-[10%] md:w-[30%] md:left-[37%] md:top-[5%]  md:h-[600px]  '
            />
            <Image
                height={3000}
                width={3000}
                src={joseDaniel2}
                alt='image'
                className='object-cover w-[60%] mx-auto absolute top-[80%] rounded-2xl right-[20%] md:w-[30%] h-[200px] md:right-[0] md:top-[10%] md:h-[600px] '
            />
        </div>
    );
};
