import Image from 'next/image';
import { useAnimations } from '@/hooks';
import { contactMainImage } from '@/assets';

export const ContactImage = () => {
    const { fadeOut } = useAnimations();

    const isHover = true;

    return (
        <div data-aos={fadeOut}>
            <div className='relative general__image'>
                <Image
                    width={3000}
                    height={3000}
                    src={contactMainImage}
                    alt='CONTACTO'
                    className='h-[590px] object-center w-full object-cover shadow-xl sm:h-[800px] lg:h-[1100px] 2xl:h-[1300px]'
                />
                {isHover && (
                    <div className='absolute top-[40%] right-[50%] translate-x-[50%] z-[100] md:top-[40%]'>
                        <h1 className='text-gray-100 title_letter text-[28px] sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl'>
                            CONTACTO
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
};
