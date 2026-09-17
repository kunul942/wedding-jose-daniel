import { useContext } from 'react';
import Link from 'next/link';

import { PhotographyContext } from '../photograph/context';
import { navbarLinks, navbarMenuLinks, socialLinks } from '@/constant';
import { FacebookIcon, InstagramIcon, WhatsappIcon } from './SocialIcons';
import { MenuOverlay } from './MenuOverlay';

interface Props {
    /** Renders the navbar floating on top of the hero, in white. */
    overlay?: boolean;
    /** Background of the solid navbar. `cream` matches the editorial heroes. */
    tone?: 'white' | 'cream';
}

const socialIcons = {
    instagram: InstagramIcon,
    facebook: FacebookIcon,
    whatsapp: WhatsappIcon,
};

export const Navbar = ({ overlay = false, tone = 'white' }: Props) => {
    const { openMenu, handleCloseMenu, handleOpenMenu } = useContext(
        PhotographyContext
    ) as any;

    const wrapper = overlay
        ? 'absolute top-0 left-0 z-[1000] w-full text-white'
        : `relative z-[1000] w-full text-[#221f1d] ${
              tone === 'cream' ? 'bg-[#eae7dd]' : 'bg-white'
          }`;

    return (
        <>
            <header
                className={`${wrapper} ${openMenu ? 'hidden' : ''} animate__animated animate__fadeIn`}
            >
                <nav className='mx-auto flex w-[92%] items-center justify-between py-5 lg:py-7'>
                    {/***** LEFT: burger + wordmark *****/}
                    <div className='flex flex-1 items-center gap-6 lg:gap-10'>
                        <button
                            type='button'
                            aria-label='Abrir menú'
                            onClick={handleOpenMenu}
                            className='flex w-8 flex-col gap-[6px] lg:w-9'
                        >
                            <span className='block h-[1px] w-full bg-current' />
                            <span className='block h-[1px] w-full bg-current' />
                        </button>

                        <Link
                            href='/'
                            className='display_serif hidden text-center text-[13px] leading-[1.15] tracking-[0.16em] md:block lg:text-[15px]'
                        >
                            WEDDING
                            <br />
                            JOSE DANIEL
                        </Link>
                    </div>

                    {/***** CENTER: links *****/}
                    <div className='hidden items-center justify-center gap-8 md:flex lg:gap-14 xl:gap-20'>
                        {navbarMenuLinks.map(({ label, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className='hero__nav-link ui_sans text-[11px] uppercase lg:text-[12px]'
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/***** RIGHT: social *****/}
                    <div className='flex flex-1 items-center justify-end gap-5'>
                        <span className='display_serif text-[15px] tracking-[0.16em] md:hidden'>
                            <Link href='/'>{navbarLinks.name}</Link>
                        </span>

                        <div className='hidden items-center gap-5 md:flex'>
                            {socialLinks.map(({ id, link }) => {
                                const Icon =
                                    socialIcons[
                                        id as keyof typeof socialIcons
                                    ] ?? InstagramIcon;
                                return (
                                    <a
                                        key={id}
                                        href={link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        aria-label={id}
                                        className='hero__nav-link'
                                    >
                                        <Icon className='h-[17px] w-[17px]' />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </nav>
            </header>

            {openMenu && <MenuOverlay onClose={handleCloseMenu} />}
        </>
    );
};
