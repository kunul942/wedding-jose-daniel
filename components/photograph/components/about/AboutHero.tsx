import Image from 'next/image';
import Link from 'next/link';

import { useAnimations } from '@/hooks';
import { aboutHero } from '@/constant';
import { joseDanielCollage2, joseDanielImage3 } from '@/assets';

export const AboutHero = () => {
    const { fadeOut } = useAnimations();
    const { title, card } = aboutHero;

    return (
        <section className='relative w-full overflow-hidden bg-white'>
            <div
                className='mx-auto w-[92%] max-w-[1600px] pt-10 lg:pt-14'
                data-aos={fadeOut}
            >
                {/***** BIG TITLE *****/}
                <h1 className='display_serif relative z-0 text-center text-[13vw] uppercase leading-[0.95] tracking-[-0.005em] text-[#211d1a] lg:whitespace-nowrap lg:text-[7.8vw]'>
                    {title}
                </h1>

                {/***** STAGE *****/}
                <div className='relative mt-8 lg:mt-[-1.6vw] lg:h-[52vw]'>
                    {/**** MAIN PORTRAIT ****/}
                    <div className='relative z-10 aspect-[2/3] w-full lg:absolute lg:left-1/2 lg:top-0 lg:h-full lg:w-[41%] lg:-translate-x-1/2'>
                        <Image
                            priority
                            src={joseDanielCollage2}
                            alt='José Daniel'
                            quality={70}
                            sizes='(max-width: 1024px) 92vw, 42vw'
                            className='h-full w-full object-cover grayscale'
                        />
                    </div>

                    {/**** STORY CARD ****/}
                    <div className='relative z-20 -mt-14 ml-auto w-[88%] bg-white px-7 py-9 sm:px-9 sm:py-11 lg:absolute lg:right-0 lg:top-[26%] lg:ml-0 lg:mt-0 lg:w-[31%] lg:px-12 lg:py-14'>
                        <h2 className='display_serif text-[20px] italic tracking-[0.03em] text-[#211d1a] lg:text-[24px]'>
                            {card.title}
                        </h2>

                        {card.paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className='ui_sans mt-6 text-[14px] font-light leading-[1.85] text-[#3a3530] lg:text-[15px]'
                            >
                                {paragraph}
                            </p>
                        ))}

                        <Link
                            href={card.cta.href}
                            className='ui_sans mt-9 inline-block w-fit border border-[#2b2723] px-8 py-4 text-[12px] font-medium tracking-[0.08em] text-[#2b2723] transition-colors duration-300 hover:bg-[#2b2723] hover:text-white lg:mt-11'
                        >
                            {card.cta.label} &rarr;
                        </Link>
                    </div>

                    {/**** SMALL SIDE IMAGE ****/}
                    <div className='relative z-20 mt-8 aspect-[4/5] w-[58%] lg:absolute lg:bottom-[14%] lg:left-[9%] lg:mt-0 lg:w-[17%]'>
                        <Image
                            src={joseDanielImage3}
                            alt=''
                            aria-hidden='true'
                            quality={60}
                            sizes='(max-width: 1024px) 58vw, 18vw'
                            className='h-full w-full object-cover grayscale'
                        />
                    </div>
                </div>

                <div className='h-16 lg:h-24' />
            </div>
        </section>
    );
};
