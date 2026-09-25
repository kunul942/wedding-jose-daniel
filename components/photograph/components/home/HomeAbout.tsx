import Image from 'next/image';
import Link from 'next/link';

import { useAnimations } from '@/hooks';
import { homeAbout } from '@/constant';
import { joseDanielImage2, pf43 } from '@/assets';
import { leviSashaGallery16 } from '@/assets/galeria';

export const HomeAbout = () => {
    const { fadeOut } = useAnimations();
    const { eyebrow, title, lead, text, cta } = homeAbout;

    return (
        <section className='relative z-10 w-full bg-[#f6f2ec]'>
            <div
                className='mx-auto w-[86%] max-w-[1500px] pt-20 lg:pt-28'
                data-aos={fadeOut}
            >
                <div className='grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr_0.6fr] lg:gap-14'>
                    {/**** PORTRAIT ****/}
                    <div className='relative aspect-[2/3] w-full overflow-hidden'>
                        <Image
                            src={joseDanielImage2}
                            alt='José Daniel'
                            quality={70}
                            sizes='(max-width: 1024px) 86vw, 32vw'
                            className='h-full w-full object-cover grayscale'
                        />
                    </div>

                    {/**** TEXT ****/}
                    <div className='flex flex-col justify-center text-[#2b2723] lg:pt-10'>
                        <p className='ui_sans text-[11px] font-medium tracking-[0.16em] lg:text-[12px]'>
                            {eyebrow}
                        </p>

                        <h2 className='display_serif mt-5 text-[11vw] uppercase leading-[1.02] tracking-[0.02em] sm:text-[8vw] lg:text-[4.2vw] 2xl:text-[3.8vw]'>
                            {title}
                        </h2>

                        <p className='ui_sans mt-7 max-w-[520px] text-[11px] font-medium uppercase leading-[1.75] tracking-[0.08em] lg:text-[12px]'>
                            {lead}
                        </p>

                        <p className='ui_sans mt-6 max-w-[430px] text-[14px] font-light leading-[1.8] lg:text-[15px]'>
                            {text}
                        </p>

                        <Link
                            href={cta.href}
                            className='ui_sans mt-10 inline-block w-fit border border-[#2b2723] px-8 py-4 text-[12px] font-medium tracking-[0.12em] transition-colors duration-300 hover:bg-[#2b2723] hover:text-[#f6f2ec]'
                        >
                            {cta.label} &rarr;
                        </Link>
                    </div>

                    {/**** SIDE IMAGES ****/}
                    <div className='hidden flex-col lg:flex'>
                        <div className='relative aspect-square w-[80%] self-end overflow-hidden'>
                            <Image
                                src={leviSashaGallery16}
                                alt=''
                                aria-hidden='true'
                                quality={60}
                                sizes='20vw'
                                className='h-full w-full object-cover grayscale'
                            />
                        </div>

                        <div className='relative z-20 mt-auto aspect-[4/5] w-[92%] -mb-24 overflow-hidden xl:-mb-32'>
                            <Image
                                src={pf43}
                                alt=''
                                aria-hidden='true'
                                quality={60}
                                sizes='22vw'
                                className='h-full w-full object-cover'
                            />
                        </div>
                    </div>
                </div>

                <div className='h-20 lg:h-28' />
            </div>
        </section>
    );
};
