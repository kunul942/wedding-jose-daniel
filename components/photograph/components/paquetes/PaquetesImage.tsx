import { useAnimations } from '@/hooks';
import { paquetesMainImage } from '@/assets';
import Image from 'next/image';

export const PaquetesImage = () => {
    const { fadeOut } = useAnimations();

    const isHover = true;

    return (
        <div data-aos={fadeOut}>
            <div className='relative general__image'>
                <Image
                    width={5000}
                    height={5000}
                    src={paquetesMainImage}
                    alt='paquetesImage'
                    className='h-[380px] w-full object-cover sm:h-[500px] md:h-[600px] xl:h-[700px] 2xl:h-[1000px]'
                />
                {isHover && (
                    <div className='absolute top-[40%] right-[50%] translate-x-[50%] z-[100] md:top-[40%]'>
                        <h1 className='text-gray-100 title_letter text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl'>
                            PAQUETES
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
};
