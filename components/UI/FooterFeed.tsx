import Image from 'next/image';

import { useAnimations } from '@/hooks';
import { homeFeed } from '@/constant';
import { pf6, pf23, pf24, pf30 } from '@/assets';

const feedImages = [pf24, pf6, pf23, pf30];

export const FooterFeed = () => {
    const { fadeOut } = useAnimations();
    const { follow, handle, eyebrow, links, tagline } = homeFeed;

    return (
        <section className='w-full overflow-hidden bg-[#322d28]'>
            <div
                className='mx-auto w-[86%] max-w-[1200px] py-20 lg:py-24'
                data-aos={fadeOut}
            >
                {/**** SCRIPT HEADLINE ****/}
                <h2 className='script_hand text-center leading-[1.05] text-white'>
                    <span className='block text-[13vw] lg:text-[5vw] 2xl:text-[66px]'>
                        {follow}
                    </span>
                    <span className='block text-[13vw] lg:text-[5vw] 2xl:text-[66px]'>
                        {handle}
                    </span>
                </h2>

                <p className='ui_sans mt-8 text-center text-[11px] font-medium uppercase tracking-[0.13em] text-white sm:text-left lg:-mt-6 lg:text-[12px]'>
                    {eyebrow}
                </p>

                {/**** FEED STRIP ****/}
                <div className='mt-5 grid grid-cols-2 sm:grid-cols-4'>
                    {feedImages.map((img, index) => (
                        <div
                            key={index}
                            className='relative aspect-square w-full overflow-hidden'
                        >
                            <Image
                                src={img}
                                alt='Wedding Jose Daniel'
                                quality={60}
                                sizes='(max-width: 640px) 44vw, 22vw'
                                className='h-full w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.04]'
                            />
                        </div>
                    ))}
                </div>

                {/**** SOCIAL LINKS ****/}
                <div className='mt-14 flex items-stretch justify-center gap-10 text-white lg:gap-16'>
                    {links.map(({ id, label, caption, href }, index) => (
                        <div
                            key={id}
                            className={`flex-1 text-center sm:flex-none ${
                                index > 0
                                    ? 'border-l border-white/30 pl-10 lg:pl-16'
                                    : ''
                            }`}
                        >
                            <a
                                href={href}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='group block'
                            >
                                <span className='display_serif block text-[9vw] leading-none transition-opacity duration-300 group-hover:opacity-70 sm:text-[6vw] lg:text-[3.4vw] 2xl:text-[3vw]'>
                                    {label}
                                </span>
                                <span className='ui_sans mt-4 block text-[13px] font-medium'>
                                    {caption} &rarr;
                                </span>
                            </a>
                        </div>
                    ))}
                </div>

                {/**** TAGLINE ****/}
                <p className='ui_sans mt-16 text-center text-[13px] font-light leading-[1.8] text-white/90 lg:text-[14px]'>
                    {tagline.map((line) => (
                        <span key={line} className='block'>
                            {line}
                        </span>
                    ))}
                </p>
            </div>
        </section>
    );
};
