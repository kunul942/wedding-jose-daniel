import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import { FacebookIcon, InstagramIcon, WhatsappIcon } from './SocialIcons';
import {
    heroContent,
    menuOverlayCards,
    menuOverlayLinks,
    socialLabels,
    socialLinks,
} from '@/constant';
import { BodaImage, homeMainImage4, homeMainImage6 } from '@/assets';

const socialIcons = {
    instagram: InstagramIcon,
    facebook: FacebookIcon,
    whatsapp: WhatsappIcon,
};

interface Props {
    onClose: () => void;
}

interface CardProps {
    image: typeof homeMainImage6;
    caption: string;
    href: string;
    onClose: () => void;
}

const MenuCard = ({ image, caption, href, onClose }: CardProps) => (
    <Link href={href} onClick={onClose} className='group block w-full'>
        <div className='relative aspect-[4/5] w-full overflow-hidden'>
            <Image
                src={image}
                alt={caption}
                quality={60}
                sizes='(max-width: 1024px) 40vw, 20vw'
                className='h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]'
            />
        </div>
        <p className='ui_sans mt-4 text-center text-[11px] font-medium tracking-[0.14em] text-white transition-opacity duration-300 group-hover:opacity-70 2xl:text-[12px]'>
            {caption}
        </p>
    </Link>
);

export const MenuOverlay = ({ onClose }: Props) => {
    useEffect(() => {
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = previous;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onClose]);

    return (
        <div className='fixed inset-0 z-[100000] overflow-y-auto animate__animated animate__fadeIn'>
            {/***** BACKGROUND *****/}
            <div className='fixed inset-0'>
                <Image
                    src={homeMainImage4}
                    alt=''
                    aria-hidden='true'
                    quality={45}
                    sizes='100vw'
                    className='h-full w-full scale-110 object-cover blur-[7px]'
                />
                <div className='absolute inset-0 bg-[#2a2622]/70' />
            </div>

            {/***** CLOSE *****/}
            <button
                type='button'
                aria-label='Cerrar menú'
                onClick={onClose}
                className='fixed left-5 top-5 z-20 h-8 w-8 text-white transition-opacity hover:opacity-60 sm:left-8 sm:top-8 sm:h-9 sm:w-9'
            >
                <span className='absolute left-0 top-1/2 block h-[1.5px] w-full rotate-45 bg-current' />
                <span className='absolute left-0 top-1/2 block h-[1.5px] w-full -rotate-45 bg-current' />
            </button>

            {/***** CONTENT *****/}
            <div className='relative z-10 flex min-h-full flex-col px-6 pb-12 pt-16 sm:pt-14'>
                {/**** WORDMARK ****/}
                <div className='text-center text-white'>
                    <Link
                        href='/'
                        onClick={onClose}
                        className='display_serif inline-block text-[7vw] tracking-[0.07em] sm:text-[5vw] lg:text-[3.1vw] 2xl:text-[2.8vw]'
                    >
                        {heroContent.title}
                    </Link>
                    <p className='hero__eyebrow ui_sans mt-5 text-[9px] sm:mt-6 sm:text-[10px] lg:text-[12px]'>
                        {heroContent.subtitle}
                    </p>
                </div>

                {/**** MIDDLE ****/}
                <div className='mt-12 flex flex-1 items-center lg:mt-6'>
                    <div className='grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-3'>
                        {/* LEFT CARD + SOCIAL */}
                        <div className='hidden justify-center lg:flex'>
                            <div className='w-[17vw] max-w-[330px]'>
                                <MenuCard
                                    image={homeMainImage6}
                                    caption={menuOverlayCards.left.caption}
                                    href={menuOverlayCards.left.href}
                                    onClose={onClose}
                                />

                                <ul className='mt-14 space-y-2'>
                                    {socialLinks.map(({ id, link }) => {
                                        const Icon =
                                            socialIcons[
                                                id as keyof typeof socialIcons
                                            ] ?? InstagramIcon;
                                        return (
                                            <li key={id}>
                                                <a
                                                    href={link}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='hero__nav-link ui_sans flex items-center gap-3 text-[12px] font-medium text-white'
                                                >
                                                    <Icon className='h-4 w-4 shrink-0' />
                                                    {
                                                        socialLabels[
                                                            id as keyof typeof socialLabels
                                                        ]
                                                    }
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>

                        {/* LINKS */}
                        <nav className='flex flex-col items-center gap-1 text-white sm:gap-2'>
                            {menuOverlayLinks.map(({ label, href, italic }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={onClose}
                                    className={`display_serif text-[10vw] leading-[1.22] transition-opacity duration-300 hover:opacity-60 sm:text-[7vw] lg:text-[3.5vw] 2xl:text-[3.2vw] ${
                                        italic ? 'italic' : ''
                                    }`}
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>

                        {/* RIGHT CARD */}
                        <div className='hidden justify-center lg:flex'>
                            <div className='w-[17vw] max-w-[330px] translate-y-[22%]'>
                                <MenuCard
                                    image={BodaImage}
                                    caption={menuOverlayCards.right.caption}
                                    href={menuOverlayCards.right.href}
                                    onClose={onClose}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/**** MOBILE SOCIAL ****/}
                <div className='mt-14 flex items-center justify-center gap-7 text-white lg:hidden'>
                    {socialLinks.map(({ id, link }) => {
                        const Icon =
                            socialIcons[id as keyof typeof socialIcons] ??
                            InstagramIcon;
                        return (
                            <a
                                key={id}
                                href={link}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={id}
                                className='hero__nav-link'
                            >
                                <Icon className='h-5 w-5' />
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
