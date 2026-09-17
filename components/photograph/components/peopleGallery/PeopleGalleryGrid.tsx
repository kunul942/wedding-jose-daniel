import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import { GalleryLightbox } from './GalleryLightbox';

interface GridImage {
    img: StaticImageData;
    id: string;
}

interface Props {
    images: GridImage[];
}

export const PeopleGalleryGrid = ({ images }: Props) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    /***** TWO STAGGERED COLUMNS, KEEPING THE ORIGINAL READING ORDER *****/
    const columns: { image: GridImage; index: number }[][] = [[], []];

    images.forEach((image, index) => {
        columns[index % 2].push({ image, index });
    });

    return (
        <>
            <section className='mx-auto w-[94%] max-w-[1720px] py-14 md:py-24'>
                <div className='flex flex-col gap-10 md:flex-row md:gap-10 lg:gap-14 xl:gap-20'>
                    {columns.map((column, columnIndex) => (
                        <div
                            key={`column-${columnIndex}`}
                            className={`flex w-full flex-col gap-10 md:w-1/2 lg:gap-14 xl:gap-20 ${
                                columnIndex === 0 ? 'md:pt-[10%]' : ''
                            }`}
                        >
                            {column.map(({ image, index }) => (
                                <GalleryFigure
                                    key={image.id}
                                    image={image.img}
                                    onOpen={() => setOpenIndex(index)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <GalleryLightbox
                images={images}
                index={openIndex}
                onClose={() => setOpenIndex(null)}
                onNavigate={setOpenIndex}
            />
        </>
    );
};

/**
 * Each figure reveals itself once its own image is decoded. No global scroll
 * library involved: an image can never stay stuck at `opacity: 0`.
 */
const GalleryFigure = ({
    image,
    onOpen,
}: {
    image: StaticImageData;
    onOpen: () => void;
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <figure className='gallery__figure cursor-zoom-in' onClick={onOpen}>
            <Image
                src={image}
                alt='Imagen de la galeria'
                quality={95}
                sizes='(max-width: 767px) 94vw, 47vw'
                placeholder='blur'
                onLoad={() => setIsLoaded(true)}
                className={`h-auto w-full object-cover transition-opacity duration-700 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
            />
        </figure>
    );
};
