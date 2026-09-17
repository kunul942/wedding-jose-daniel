import Image from 'next/image';
import Link from 'next/link';

import { useAnimations } from '@/hooks';
import { homeRealWeddings } from '@/constant';
import { fitTitleSize } from '@/utils';
import { portfolioImage4, portfolioImage6, portfolioImage7 } from '@/assets';

export const HomeRealWeddings = () => {
    const { fadeOut } = useAnimations();
    const { title, caption, href } = homeRealWeddings;

    const titleSize = {
        '--home-weddings-title': fitTitleSize(title, 96),
    } as React.CSSProperties;

    return (
        <section className='w-full overflow-hidden bg-[#fbfaf8]'>
            <Link href={href} className='group block'>
                <div className='py-20 lg:py-24' data-aos={fadeOut}>
                    <h2
                        style={titleSize}
                        className='home-weddings__title display_serif whitespace-nowrap text-center uppercase leading-[0.95] tracking-[0.01em] text-[#2b2723]'
                    >
                        {title.map((line) => (
                            <span key={line} className='block'>
                                {line}
                            </span>
                        ))}
                    </h2>

                    {/***** MOBILE: center image with two bleeding slivers *****/}
                    <div className='relative mt-[1vw] w-full sm:hidden'>
                        <div className='relative mx-auto aspect-[3/4] w-[66%] overflow-hidden'>
                            <Image
                                src={portfolioImage6}
                                alt='Bodas reales'
                                quality={70}
                                sizes='66vw'
                                className='h-full w-full object-cover grayscale'
                            />
                        </div>

                        <div className='absolute left-0 top-[19%] aspect-[114/375] w-[15.5%] overflow-hidden'>
                            <Image
                                src={portfolioImage4}
                                alt=''
                                aria-hidden='true'
                                quality={55}
                                sizes='16vw'
                                className='h-full w-full object-cover'
                            />
                        </div>

                        <div className='absolute right-0 top-[20%] aspect-[112/360] w-[15%] overflow-hidden'>
                            <Image
                                src={portfolioImage7}
                                alt=''
                                aria-hidden='true'
                                quality={55}
                                sizes='15vw'
                                className='h-full w-full object-cover'
                            />
                        </div>
                    </div>

                    {/***** DESKTOP *****/}
                    <div className='mx-auto hidden w-[88%] max-w-[1500px] grid-cols-3 items-center gap-8 sm:grid lg:mt-4 lg:gap-12'>
                        <div className='relative aspect-[4/5] w-full overflow-hidden sm:mt-8'>
                            <Image
                                src={portfolioImage4}
                                alt='Bodas reales'
                                quality={65}
                                sizes='26vw'
                                className='h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]'
                            />
                        </div>

                        <div className='relative aspect-[3/4] w-full overflow-hidden'>
                            <Image
                                src={portfolioImage6}
                                alt='Bodas reales'
                                quality={70}
                                sizes='32vw'
                                className='h-full w-full object-cover grayscale transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]'
                            />
                        </div>

                        <div className='relative aspect-[4/5] w-full overflow-hidden sm:mb-10'>
                            <Image
                                src={portfolioImage7}
                                alt='Bodas reales'
                                quality={65}
                                sizes='26vw'
                                className='h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]'
                            />
                        </div>
                    </div>

                    <p className='ui_sans mt-12 px-6 text-center text-[13px] font-semibold tracking-[0.14em] text-[#2b2723] transition-opacity duration-300 group-hover:opacity-60 sm:mt-10 sm:text-[11px] sm:font-medium lg:text-[12px]'>
                        {caption}
                    </p>
                </div>
            </Link>
        </section>
    );
};
