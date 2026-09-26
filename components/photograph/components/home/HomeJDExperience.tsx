import Image from 'next/image';
import Link from 'next/link';

import { useAnimations } from '@/hooks';
import { homeJDExperience } from '@/constant';
import { pf32 } from '@/assets';

export const HomeJDExperience = () => {
    const { fadeOut } = useAnimations();
    const { eyebrow, title, paragraphs, cta, specialty } = homeJDExperience;

    return (
        <section className='relative w-full bg-[#322d28]'>
            <div
                className='mx-auto w-[86%] max-w-[1500px] py-20 lg:py-28'
                data-aos={fadeOut}
            >
                <div className='grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20'>
                    {/**** TEXT ****/}
                    <div className='text-white'>
                        <p className='ui_sans text-[11px] font-medium uppercase tracking-[0.16em] lg:text-[12px]'>
                            {eyebrow}
                        </p>

                        <h2 className='display_serif mt-6 text-[8vw] leading-[1.12] sm:text-[6vw] lg:text-[2.9vw] 2xl:text-[2.6vw]'>
                            {title.map((line) => (
                                <span key={line} className='block'>
                                    {line}
                                </span>
                            ))}
                        </h2>

                        {paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className={`ui_sans max-w-[400px] text-[14px] font-light leading-[1.85] text-white/90 lg:text-[15px] ${
                                    index === 0 ? 'mt-12 lg:mt-16' : 'mt-5'
                                }`}
                            >
                                {paragraph}
                            </p>
                        ))}

                        <Link
                            href={cta.href}
                            className='ui_sans mt-10 inline-block w-fit border border-white/70 px-8 py-4 text-[13px] font-light tracking-[0.04em] transition-colors duration-300 hover:bg-white hover:text-[#322d28]'
                        >
                            {cta.label} &rarr;
                        </Link>

                        <div className='ui_sans mt-14 text-right text-[13px] font-medium'>
                            <p className='uppercase tracking-[0.1em]'>
                                {specialty.label}
                            </p>
                            <p className='mt-1 font-light'>{specialty.text}</p>
                        </div>
                    </div>

                    {/**** IMAGE ****/}
                    <div className='flex justify-center lg:justify-end'>
                        <div className='relative aspect-[5/6] w-full max-w-[560px] overflow-hidden'>
                            <Image
                                src={pf32}
                                alt='Wedding Jose Daniel'
                                quality={70}
                                sizes='(max-width: 1024px) 86vw, 45vw'
                                className='h-full w-full object-cover grayscale'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
