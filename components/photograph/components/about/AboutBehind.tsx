import Image from 'next/image';

import { useAnimations } from '@/hooks';
import { aboutBehind } from '@/constant';
import { joseDanielImageBook } from '@/assets';

export const AboutBehind = () => {
    const { fadeOut } = useAnimations();
    const { eyebrow, name, subtitle, paragraphs } = aboutBehind;

    return (
        <section className='w-full bg-white pb-20 lg:pb-28'>
            <div
                className='relative mx-auto w-[92%] max-w-[1600px]'
                data-aos={undefined}
            >
                {/***** DARK PANEL *****/}
                <div className='relative z-10 bg-[#2e2925] px-7 py-16 sm:px-12 lg:w-[64%] lg:py-24 lg:pl-16 lg:pr-[16%]'>
                    <div className='mx-auto max-w-[560px] text-center'>
                        <p className='ui_sans text-[10px] font-medium tracking-[0.2em] text-[#e8e0d4] lg:text-[11px]'>
                            {eyebrow}
                        </p>

                        <h2 className='display_serif mt-6 text-[11vw] uppercase leading-[1.05] tracking-[0.01em] text-white sm:text-[8vw] lg:mt-8 lg:text-[3.6vw] 2xl:text-[50px]'>
                            {name}
                        </h2>

                        <p className='display_serif mx-auto mt-4 max-w-[430px] text-[19px] leading-[1.35] text-[#f4efe7] lg:text-[23px]'>
                            {subtitle}
                        </p>

                        {paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className={`ui_sans text-[13px] font-light leading-[1.9] text-[#ddd5c9] lg:text-[14px] ${
                                    index === 0 ? 'mt-9 lg:mt-11' : 'mt-7'
                                }`}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/***** PORTRAIT *****/}
                <div className='relative z-20 -mt-12 ml-auto aspect-[4/5] w-[82%] lg:absolute lg:right-[4%] lg:top-1/2 lg:mt-0 lg:aspect-auto lg:h-[86%] lg:w-[36%] lg:-translate-y-1/2'>
                    <Image
                        src={joseDanielImageBook}
                        alt={name}
                        quality={70}
                        sizes='(max-width: 1024px) 82vw, 36vw'
                        className='h-full w-full object-cover'
                    />
                </div>
            </div>
        </section>
    );
};
