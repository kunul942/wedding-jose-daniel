import Image from 'next/image';
import Link from 'next/link';

import { useAnimations } from '@/hooks';
import { homeSocialPackage } from '@/constant';
import { pf25 } from '@/assets';
import { chachiJoseGallery134, leviSashaGallery55 } from '@/assets/galeria';

const backdrop = [pf25, leviSashaGallery55, chachiJoseGallery134];

export const HomeSocialPackage = () => {
    const { fadeOut } = useAnimations();
    const { eyebrow, titleItalic, title, text, cta } = homeSocialPackage;

    return (
        <section className='relative w-full overflow-hidden'>
            {/***** BACKGROUND STRIP *****/}
            <div className='absolute inset-0 grid grid-cols-3'>
                {backdrop.map((img, index) => (
                    <div key={index} className='relative h-full w-full'>
                        <Image
                            src={img}
                            alt=''
                            aria-hidden='true'
                            quality={50}
                            sizes='34vw'
                            className='h-full w-full object-cover'
                        />
                    </div>
                ))}
            </div>
            <div className='absolute inset-0 bg-[#241f1b]/65' />

            {/***** CONTENT *****/}
            <div
                className='relative z-10 mx-auto w-[86%] max-w-[1500px] py-20 lg:py-28'
                data-aos={fadeOut}
            >
                <div className='max-w-[620px] text-white lg:ml-[8%]'>
                    <p className='ui_sans text-[11px] font-medium uppercase tracking-[0.13em] lg:text-[12px]'>
                        {eyebrow}
                    </p>

                    <h2 className='display_serif mt-6 text-[11vw] leading-[1.06] sm:text-[8vw] lg:text-[4.1vw] 2xl:text-[3.7vw]'>
                        <span className='italic'>{titleItalic} </span>
                        <span className='uppercase'>{title}</span>
                    </h2>

                    <p className='ui_sans mt-8 max-w-[540px] text-[14px] font-light leading-[1.8] text-white/90 lg:text-[15px]'>
                        {text}
                    </p>

                    <Link
                        href={cta.href}
                        className='ui_sans mt-10 inline-block w-fit bg-[#f6f2ec] px-9 py-4 text-[12px] font-medium tracking-[0.14em] text-[#2b2723] transition-colors duration-300 hover:bg-[#ad967a] hover:text-white'
                    >
                        {cta.label} &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};
