import Image from 'next/image';
import { PeopleGalleries } from '@/interfaces';
import { useAnimations } from '@/hooks';

interface Props {
    peopleGallery: PeopleGalleries;
}

export const PeopleGallery = ({ peopleGallery }: Props) => {
    const { fadeOut } = useAnimations();

    const isHover = true;

    return (
        <>
            <div data-aos={fadeOut}>
                <div className='relative general__image'>
                    <Image
                        priority
                        width={3000}
                        height={3000}
                        src={peopleGallery.mainImage}
                        alt='image'
                        className='h-[380px] w-full object-cover object-center sm:h-[500px] md:h-[600px] xl:h-[700px] 2xl:h-[1000px]'
                    />
                    {isHover && (
                        <div className='absolute top-[40%] right-[50%] translate-x-[50%] z-[100] md:top-[40%]'>
                            <h1 className='text-gray-100 title_letter text-[18px] sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl'>
                                {peopleGallery.name}
                            </h1>
                        </div>
                    )}
                </div>
            </div>
            <div className='w-[90%] mx-auto my-6 md:my-8 galerias__grid'>
                {peopleGallery.images.map((el) => (
                    <div key={el.id} className='p-4' data-aos={fadeOut}>
                        <div className='relative h-[400px] sm:h-[500px] md:h-[400px] lg:h-[600px] 2xl:h-[700px] p-4'>
                            <Image
                                src={el.img.src}
                                alt='Image'
                                width={5000}
                                height={5000}
                                className='rounded-2xl image h-[400px] sm:h-[500px] md:h-[400px] lg:h-[600px] 2xl:h-[700px] object-cover object-center w-full'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
