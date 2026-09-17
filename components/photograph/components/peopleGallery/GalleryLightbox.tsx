import { useCallback, useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface LightboxImage {
    img: StaticImageData;
    id: string;
}

interface Props {
    images: LightboxImage[];
    /** Index of the open image, or `null` when the lightbox is closed. */
    index: number | null;
    onClose: () => void;
    onNavigate: (index: number) => void;
}

export const GalleryLightbox = ({
    images,
    index,
    onClose,
    onNavigate,
}: Props) => {
    const [isLoading, setIsLoading] = useState(true);
    const touchStartX = useRef<number | null>(null);

    const isOpen = index !== null;
    const total = images.length;

    const goTo = useCallback(
        (next: number) => {
            setIsLoading(true);
            onNavigate((next + total) % total);
        },
        [onNavigate, total]
    );

    /***** RESET THE LOADER ON EVERY NEW IMAGE *****/
    useEffect(() => {
        setIsLoading(true);
    }, [index]);

    /***** KEYBOARD + SCROLL LOCK *****/
    useEffect(() => {
        if (!isOpen) return;

        const handleKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
            if (event.key === 'ArrowLeft') goTo((index as number) - 1);
            if (event.key === 'ArrowRight') goTo((index as number) + 1);
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKey);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKey);
        };
    }, [isOpen, index, goTo, onClose]);

    if (!isOpen) return null;

    const current = images[index as number];

    return (
        <div
            className='lightbox fixed inset-0 z-[999] flex items-center justify-center'
            role='dialog'
            aria-modal='true'
            onClick={onClose}
            onTouchStart={(event) => {
                touchStartX.current = event.changedTouches[0].clientX;
            }}
            onTouchEnd={(event) => {
                if (touchStartX.current === null) return;
                const delta = event.changedTouches[0].clientX - touchStartX.current;
                if (Math.abs(delta) > 60) {
                    goTo((index as number) + (delta < 0 ? 1 : -1));
                }
                touchStartX.current = null;
            }}
        >
            {/***** CLOSE *****/}
            <button
                type='button'
                aria-label='Cerrar'
                onClick={onClose}
                className='lightbox__btn absolute right-4 top-4 z-20 md:right-8 md:top-8'
            >
                <svg viewBox='0 0 24 24' className='h-6 w-6 md:h-7 md:w-7'>
                    <path d='M5 5 L19 19 M19 5 L5 19' />
                </svg>
            </button>

            {/***** PREV *****/}
            <button
                type='button'
                aria-label='Anterior'
                onClick={(event) => {
                    event.stopPropagation();
                    goTo((index as number) - 1);
                }}
                className='lightbox__btn absolute left-2 top-1/2 z-20 -translate-y-1/2 md:left-8'
            >
                <svg viewBox='0 0 24 24' className='h-7 w-7 md:h-9 md:w-9'>
                    <path d='M15 4 L7 12 L15 20' />
                </svg>
            </button>

            {/***** NEXT *****/}
            <button
                type='button'
                aria-label='Siguiente'
                onClick={(event) => {
                    event.stopPropagation();
                    goTo((index as number) + 1);
                }}
                className='lightbox__btn absolute right-2 top-1/2 z-20 -translate-y-1/2 md:right-8'
            >
                <svg viewBox='0 0 24 24' className='h-7 w-7 md:h-9 md:w-9'>
                    <path d='M9 4 L17 12 L9 20' />
                </svg>
            </button>

            {/***** LOADER *****/}
            {isLoading && (
                <span className='lightbox__loader absolute z-10 h-9 w-9 animate-spin rounded-full md:h-11 md:w-11' />
            )}

            {/***** IMAGE *****/}
            <div
                key={current.id}
                className='lightbox__stage relative flex h-full w-full items-center justify-center px-10 py-10 md:px-24'
                onClick={(event) => event.stopPropagation()}
            >
                <Image
                    priority
                    src={current.img}
                    alt='Imagen de la galeria'
                    quality={100}
                    sizes='100vw'
                    placeholder='blur'
                    onLoad={() => setIsLoading(false)}
                    className={`h-auto max-h-full w-auto max-w-full object-contain transition-opacity duration-500 ${
                        isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                />
            </div>

            {/***** COUNTER *****/}
            <span className='ui_sans absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-[11px] tracking-[0.25em] text-neutral-500 md:bottom-8'>
                {(index as number) + 1} / {total}
            </span>
        </div>
    );
};
