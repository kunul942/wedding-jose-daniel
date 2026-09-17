import Image from 'next/image';
import Link from 'next/link';

import { useAnimations } from '@/hooks';
import { galleryFeatured } from '@/constant';
import { GallerySection } from '@/interfaces';

interface Props {
    boda: GallerySection[];
}

/** cada galería toma una "forma" del ciclo: el formato de la foto, el ancho
 *  dentro de su columna y si el pie de foto va arriba o abajo. las columnas
 *  van desfasadas, así el texto de una cae en el aire de la otra */
const shapes = [
    { ratio: 'aspect-[5/7]', width: 'w-full lg:w-[92%]', captionAbove: false },
    { ratio: 'aspect-[3/4]', width: 'w-full', captionAbove: false },
    { ratio: 'aspect-[2/3]', width: 'w-full lg:w-[88%]', captionAbove: false },
    { ratio: 'aspect-[5/7]', width: 'w-full lg:w-[98%]', captionAbove: true },
];

export const GalleryFeatured = ({ boda }: Props) => {
    const { fadeOut } = useAnimations();
    const { eyebrow } = galleryFeatured;

    /** índice dentro de su propia columna: marca el aire vertical entre fotos */
    const columns = [0, 1].map((side) =>
        boda
            .map((item, index) => ({ item, index }))
            .filter(({ index }) => index % 2 === side)
    );

    return (
        <section className='w-full overflow-hidden bg-[#eae7dd] pb-24 lg:pb-32'>
            <div className='mx-auto w-[70%] max-w-[1280px]' data-aos={fadeOut}>
                {/***** LABEL *****/}
                <p className='ui_sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#211d1a] lg:text-[13px]'>
                    {eyebrow} &mdash;
                </p>

                {/***** GALERÍAS *****/}
                <div className='mt-10 flex flex-col lg:mt-14 lg:flex-row lg:items-start lg:gap-[4%]'>
                    {columns.map((column, side) => (
                        <div
                            key={side}
                            className={`contents lg:block lg:w-[48%] ${
                                side === 1 ? 'lg:mt-[9vw]' : ''
                            }`}
                        >
                            {column.map(({ item, index }, position) => {
                                const shape = shapes[index % shapes.length];
                                const caption = (
                                    <div
                                        className={
                                            shape.captionAbove
                                                ? 'mb-6 lg:mb-8'
                                                : 'mt-6 lg:mt-8'
                                        }
                                    >
                                        <h3 className='ui_sans text-[17px] font-medium uppercase leading-[1.3] tracking-[0.06em] text-[#211d1a] lg:text-[23px]'>
                                            {item.subtitle}
                                        </h3>
                                        <p className='ui_sans mt-2 text-[13px] font-light text-[#3a3530] lg:mt-3 lg:text-[15px]'>
                                            {item.location}
                                        </p>
                                    </div>
                                );

                                return (
                                    <Link
                                        key={`${item.slug}-${index}`}
                                        href={item.slug}
                                        style={{ order: index }}
                                        className={`group block ${
                                            position === 0
                                                ? 'lg:mt-0'
                                                : 'lg:mt-[16vw]'
                                        } ${
                                            index === boda.length - 1
                                                ? ''
                                                : 'mb-16 lg:mb-0'
                                        }`}
                                    >
                                        {shape.captionAbove && caption}

                                        <div
                                            className={`relative overflow-hidden ${shape.ratio} ${shape.width}`}
                                        >
                                            <Image
                                                src={item.imagePortada}
                                                alt={item.subtitle}
                                                quality={70}
                                                sizes='(max-width: 1024px) 88vw, 34vw'
                                                className='h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]'
                                            />
                                        </div>

                                        {!shape.captionAbove && caption}
                                    </Link>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
