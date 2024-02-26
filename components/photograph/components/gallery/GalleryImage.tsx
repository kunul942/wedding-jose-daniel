import Image from 'next/image';
import { useAnimations } from '@/hooks';

export const GalleryImage = ({ mainImage, title }: any) => {
    const { fadeOut } = useAnimations();

    const isHover = true;

    console.log('are you here', mainImage.src);

    return (
        <>
            <div data-aos={fadeOut}>
                <div className='relative general__image'>
                    <Image
                        width={3000}
                        height={3000}
                        src={mainImage.src}
                        alt='image'
                        className='h-[380px] w-full object-cover sm:h-[500px] md:h-[600px] xl:h-[700px] 2xl:h-[1000px]'
                    />
                    {isHover && (
                        <div className='absolute top-[40%] right-[50%] translate-x-[50%] z-[100] md:top-[40%]'>
                            <h1 className='text-gray-100 title_letter text-[24px] md:text-5xl xl:text-6xl 2xl:text-7xl'>
                                {title}
                            </h1>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
