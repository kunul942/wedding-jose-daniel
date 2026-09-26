import Image from 'next/image';
import Link from 'next/link';

import { useAnimations } from '@/hooks';
import { homeExperience } from '@/constant';
import { homeMainImage8, pf40, pf41 } from '@/assets';

export const HomeExperience = () => {
    const { fadeOut } = useAnimations();
    const { eyebrow, blocks, cta } = homeExperience;

    return (
        <section className='relative w-full overflow-hidden'>
            {/***** BACKGROUND *****/}
            <div className='absolute inset-0'>
                <Image
                    src={pf40}
                    alt=''
                    aria-hidden='true'
                    quality={55}
                    sizes='100vw'
                    className='h-full w-full object-cover grayscale lg:hidden'
                />
                <Image
                    src={homeMainImage8}
                    alt=''
                    aria-hidden='true'
                    quality={55}
                    sizes='100vw'
                    className='hidden h-full w-full object-cover grayscale lg:block'
                />
                <div className='absolute inset-0 bg-[#22201d]/55' />
            </div>

            {/***** CONTENT *****/}
            <div
                className='relative z-10 mx-auto w-[86%] max-w-[1500px] py-20 lg:py-28'
                data-aos={fadeOut}
            >
                <div className='grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20'>
                    {/**** TEXT ****/}
                    <div className='max-w-[560px] text-white'>
                        <p className='ui_sans text-[11px] font-medium uppercase leading-[1.7] tracking-[0.13em] lg:text-[12px]'>
                            {eyebrow.map((line) => (
                                <span key={line} className='block'>
                                    {line}
                                </span>
                            ))}
                        </p>

                        {blocks.map(({ id, title, paragraphs }, index) => (
                            <div key={id}>
                                {index > 0 && (
                                    <hr className='my-10 border-white/35 lg:my-12' />
                                )}

                                <h2
                                    className={`display_serif text-[10vw] leading-[1.08] sm:text-[7vw] lg:text-[3.4vw] 2xl:text-[3vw] ${
                                        index === 0 ? 'mt-10 lg:mt-14' : ''
                                    }`}
                                >
                                    {title}
                                </h2>

                                {paragraphs.map((paragraph, i) => (
                                    <p
                                        key={i}
                                        className={`ui_sans text-[14px] font-light leading-[1.85] text-white/90 lg:text-[15px] ${
                                            i === 0 ? 'mt-5' : 'mt-4'
                                        }`}
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        ))}

                        <Link
                            href={cta.href}
                            className='ui_sans mt-12 inline-block rounded-full bg-white px-11 py-4 text-[12px] font-medium tracking-[0.16em] text-[#22201d] transition-colors duration-300 hover:bg-[#ad967a] hover:text-white lg:mt-14'
                        >
                            {cta.label}
                        </Link>
                    </div>

                    {/**** IMAGE ****/}
                    <div className='flex justify-center lg:justify-end'>
                        <div className='relative aspect-[2/3] w-full max-w-[420px] overflow-hidden shadow-2xl'>
                            <Image
                                src={pf41}
                                alt='Wedding Jose Daniel'
                                quality={70}
                                sizes='(max-width: 1024px) 86vw, 420px'
                                className='h-full w-full object-cover'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
