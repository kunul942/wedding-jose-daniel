import Image from 'next/image';

import { useAnimations } from '@/hooks';
import { aboutPrimer } from '@/constant';
import { joseDanielCollage1 } from '@/assets';

export const AboutPrimer = () => {
    const { fadeOut } = useAnimations();
    const { title, headline, paragraphs, items } = aboutPrimer;

    return (
        <section className='w-full bg-white'>
            <div
                className='mx-auto w-[88%] max-w-[1180px] py-20 lg:py-28'
                data-aos={fadeOut}
            >
                {/***** BIG TITLE *****/}
                <h2 className='display_serif text-center text-[15vw] uppercase leading-[1] tracking-[0.01em] text-[#211d1a] lg:text-[8vw] 2xl:text-[112px]'>
                    {title}
                </h2>

                <div className='mt-14 grid grid-cols-1 gap-14 lg:mt-20 lg:grid-cols-[51fr_39fr] lg:gap-x-[10%] lg:gap-y-0'>
                    {/**** LEFT: image + story ****/}
                    <div>
                        <div className='relative aspect-[5/6] w-full overflow-hidden'>
                            <Image
                                src={joseDanielCollage1}
                                alt='José Daniel'
                                quality={70}
                                sizes='(max-width: 1024px) 88vw, 34vw'
                                className='h-full w-full object-cover'
                            />
                        </div>

                        <h3 className='display_serif mt-10 text-[7vw] leading-[1.25] text-[#211d1a] sm:text-[5vw] lg:text-[2.4vw] 2xl:text-[34px]'>
                            {headline.map((line) => (
                                <span key={line} className='block'>
                                    {line}
                                </span>
                            ))}
                        </h3>

                        {paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className={`ui_sans text-justify text-[13px] font-light leading-[1.9] text-[#3a3530] lg:text-[13.5px] ${
                                    index === 0 ? 'mt-7' : 'mt-6'
                                }`}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/**** RIGHT: quick answers ****/}
                    <div className='lg:pt-4'>
                        {items.map(({ id, eyebrow, accent, text }, index) => (
                            <div key={id}>
                                {index > 0 && (
                                    <hr className='my-12 border-[#211d1a]/25 lg:my-14' />
                                )}

                                <div className='flex items-end gap-3'>
                                    <span className='ui_sans pb-[6px] text-[11px] font-medium uppercase tracking-[0.16em] text-[#211d1a] lg:text-[12px]'>
                                        {eyebrow}
                                    </span>
                                    <span className='script_hand text-[30px] leading-[1] text-[#211d1a] lg:text-[38px]'>
                                        {accent}
                                    </span>
                                </div>

                                <p className='ui_sans mt-6 text-[13px] font-light leading-[1.9] text-[#3a3530] lg:text-[13.5px]'>
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
