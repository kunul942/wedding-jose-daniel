import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { useAnimations } from '@/hooks';
import { aboutGalleries } from '@/constant';
import {
    chachiJoseGallery118,
    leviSashaGallery18,
    kevynGreciaGallery27,
} from '@/assets/galeria';

/** cada columna conserva su propio formato: las fotos arrancan a la misma
 *  altura y los pies de foto caen escalonados, como en la referencia */
const covers: { src: StaticImageData; ratio: string }[] = [
    { src: chachiJoseGallery118, ratio: 'lg:aspect-[404/554]' },
    { src: leviSashaGallery18, ratio: 'lg:aspect-[514/665]' },
    { src: kevynGreciaGallery27, ratio: 'lg:aspect-[414/587]' },
];

export const AboutGalleries = () => {
    const { fadeOut } = useAnimations();
    const { eyebrow, items } = aboutGalleries;

    return (
        <section className='w-full bg-white py-20 lg:py-28'>
            <div className='mx-auto w-[88%] max-w-[1180px]' data-aos={fadeOut}>
                {/***** LABEL *****/}
                <p className='ui_sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#211d1a] lg:text-[12px]'>
                    {eyebrow}
                </p>

                {/***** GALERÍAS *****/}
                <div className='mt-10 grid grid-cols-1 items-start gap-12 sm:grid-cols-3 sm:gap-x-[5.7%] lg:mt-14 lg:grid-cols-[404fr_514fr_414fr]'>
                    {items.map(({ id, couple, link }, index) => (
                        <Link key={id} href={link} className='group block'>
                            <div
                                className={`relative aspect-[4/5] w-full overflow-hidden ${covers[index].ratio}`}
                            >
                                <Image
                                    src={covers[index].src}
                                    alt={couple}
                                    quality={70}
                                    sizes='(max-width: 640px) 88vw, 30vw'
                                    className='h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]'
                                />
                            </div>

                            <p className='ui_sans mt-6 max-w-[85%] text-[13px] uppercase leading-[1.55] tracking-[0.04em] text-[#211d1a] lg:mt-8 lg:text-[14px]'>
                                {couple}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
