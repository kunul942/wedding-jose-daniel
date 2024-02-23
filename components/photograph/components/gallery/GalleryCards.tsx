import Image from 'next/image';
import Link from 'next/link';

import { useAnimations } from '@/hooks';
import { portfolioVideoImages } from '@/constant';
import { GallerySection } from '@/interfaces';

export const GalleryCards = ({ boda }: any) => {
    const { fadeOut } = useAnimations();

    return (
        <div className='xl:mt-20 xl:mb-28'>
            <div className='w-[92%] 2xl:w-[75%] sm:w-[85%] mx-auto'>
                <h1 className='servicesColor3 title_letter text-center text-4xl pb-10 md:pb-20 2xl:pb-28 md:text-5xl xl:text-6xl 2xl:text-8xl'>
                    GALERIAS
                </h1>
                <div className='portfolio__gallery gap-10 sm:gap-20 md:gap-8 lg:gap-10 xl:gap-30 2xl:gap-40'>
                    {boda.map(
                        ({
                            slug,
                            imagePortada,
                            title,
                            subtitle,
                        }: GallerySection) => (
                            <div key={slug} data-aos={fadeOut}>
                                <div className='hoverEffect'>
                                    <Link prefetch={false} href={slug}>
                                        <Image
                                            src={imagePortada}
                                            alt='images'
                                            height={5000}
                                            width={5000}
                                            className='object-cover object-center rounded-2xl h-[400px] w-[400px] sm:h-[350px] sm:w-[550px] md:h-[250px] md:w-[300px] 2xl:h-[350px] 2xl:w-[600px]'
                                        />
                                        <div className='mt-10 text-center font-bold'>
                                            <p className='servicesColor3 text-[12px] sm:text-[16px] md:text-[12px] my-2 2xl:text-[15px]'>
                                                {title}
                                            </p>
                                            <h1 className='servicesColor2 font-mono text-[20px] sm:text-[32px] md:text-[20px] my-2 tracking-tighter 2xl:text-[24px]'>
                                                {subtitle}
                                            </h1>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    )}
                </div>
                <h1 className='servicesColor3 mt-20 mb-14 title_letter text-center text-4xl pb-10 md:pb-20 2xl:pb-28 md:text-5xl xl:text-6xl 2xl:text-8xl'>
                    VIDEOS
                </h1>
                <div className='portfolio__gallery gap-10 sm:gap-20 md:gap-8 lg:gap-10 xl:gap-30 2xl:gap-40'>
                    {portfolioVideoImages.map(
                        ({ img, bodas, couple, id, link }) => (
                            <div key={id}>
                                <Link href={link}>
                                    <Image
                                        width={3000}
                                        height={3000}
                                        src={img}
                                        alt='images'
                                        className='hoverEffect object-cover object-center rounded-2xl h-[300px] w-[400px] sm:h-[350px] sm:w-[550px] md:h-[250px] md:w-[300px] 2xl:h-[350px] 2xl:w-[600px]'
                                    />

                                    <div className='mt-10 text-center font-bold'>
                                        <p className='text-gray-500  text-[12px] sm:text-[16px] md:text-[12px] my-2 2xl:text-[15px]'>
                                            {bodas}
                                        </p>
                                        <h1 className='servicesColor2 font-mono text-[20px] sm:text-[32px] md:text-[20px] my-2 tracking-tighter 2xl:text-[24px]'>
                                            {couple}
                                        </h1>
                                    </div>
                                </Link>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};
