import Link from 'next/link';
import { FormEvent, useState } from 'react';

import { useScrollTop } from '@/hooks';
import { FacebookIcon, InstagramIcon, WhatsappIcon } from './SocialIcons';
import {
    footerContent,
    navbarMenuLinks,
    socialLinks,
    heroContent,
} from '@/constant';

const socialIcons = {
    instagram: InstagramIcon,
    facebook: FacebookIcon,
    whatsapp: WhatsappIcon,
};

export const FooterMain = () => {
    const { scrollTop } = useScrollTop();
    const [email, setEmail] = useState('');

    const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!email) return;

        const subject = encodeURIComponent('Suscripción a novedades');
        const body = encodeURIComponent(
            `Hola José Daniel, quiero suscribirme con este correo: ${email}`
        );
        window.location.href = `mailto:${footerContent.email}?subject=${subject}&body=${body}`;
    };

    return (
        <footer className='relative w-full bg-[#f6f2ec] text-[#2b2723]'>
            <div className='mx-auto w-[86%] max-w-[1500px] py-16 lg:py-20'>
                <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10'>
                    {/**** NAV ****/}
                    <div>
                        <h3 className='ui_sans text-[11px] font-medium uppercase tracking-[0.14em]'>
                            {footerContent.navTitle}
                        </h3>
                        <ul className='mt-5 space-y-2'>
                            {navbarMenuLinks.map(({ label, href }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        onClick={() => scrollTop('smooth')}
                                        className='ui_sans text-[14px] font-light capitalize transition-opacity duration-300 hover:opacity-60'
                                    >
                                        {label.toLowerCase()}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/**** CONTACT ****/}
                    <div>
                        <h3 className='ui_sans text-[11px] font-medium uppercase tracking-[0.14em]'>
                            {footerContent.contactTitle}
                        </h3>
                        <p className='ui_sans mt-5 max-w-[280px] text-[14px] font-light leading-[1.8]'>
                            {footerContent.contactText}
                        </p>
                        <p className='ui_sans mt-5 text-[14px] font-light'>
                            Correo:{' '}
                            <a
                                href={`mailto:${footerContent.email}`}
                                className='underline underline-offset-4 transition-opacity hover:opacity-60'
                            >
                                {footerContent.email}
                            </a>
                        </p>
                    </div>

                    {/**** MONOGRAM ****/}
                    <div className='flex flex-col items-center justify-start text-center'>
                        <Link
                            href='/'
                            onClick={() => scrollTop('smooth')}
                            className='transition-opacity duration-300 hover:opacity-60'
                        >
                            <div className='flex items-start justify-center gap-1'>
                                <span className='ui_sans mt-1 text-[8px] tracking-[0.1em]'>
                                    20
                                </span>
                                <span className='display_serif text-[42px] leading-none tracking-[0.02em]'>
                                    JD
                                </span>
                                <span className='ui_sans mt-1 text-[8px] tracking-[0.1em]'>
                                    26
                                </span>
                            </div>
                            <p className='display_serif mt-3 text-[13px] italic'>
                                {heroContent.title}
                            </p>
                            <p className='ui_sans mt-1 text-[8px] font-medium uppercase leading-[1.6] tracking-[0.18em]'>
                                Fotografía
                                <br />
                                de bodas
                            </p>
                        </Link>
                    </div>

                    {/**** NEWSLETTER ****/}
                    <div>
                        <h3 className='ui_sans text-[11px] font-medium uppercase tracking-[0.14em]'>
                            {footerContent.newsletterTitle}
                        </h3>
                        <p className='ui_sans mt-5 text-[14px] font-light leading-[1.8]'>
                            {footerContent.newsletterText}
                        </p>

                        <form
                            onSubmit={handleSubscribe}
                            className='mt-7 flex flex-wrap items-end gap-4'
                        >
                            <label className='flex-1'>
                                <span className='sr-only'>
                                    Correo electrónico
                                </span>
                                <input
                                    type='email'
                                    required
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    placeholder='Correo electrónico'
                                    className='ui_sans w-full min-w-[160px] border-b border-[#2b2723]/50 bg-transparent pb-2 text-[14px] font-light placeholder:text-[#2b2723]/60 focus:border-[#2b2723] focus:outline-none'
                                />
                            </label>

                            <button
                                type='submit'
                                className='ui_sans bg-[#cfd3c4] px-7 py-3 text-[11px] font-medium tracking-[0.12em] text-[#2b2723] transition-colors duration-300 hover:bg-[#ad967a] hover:text-white'
                            >
                                {footerContent.newsletterCta}
                            </button>
                        </form>
                    </div>
                </div>

                {/**** BOTTOM ****/}
                <div className='mt-14 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
                    <div>
                        <div className='flex items-center gap-5'>
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
                                        className='transition-opacity duration-300 hover:opacity-60'
                                    >
                                        <Icon className='h-[18px] w-[18px]' />
                                    </a>
                                );
                            })}
                        </div>

                        <p className='ui_sans mt-6 text-[12px] font-light opacity-70'>
                            &copy; {heroContent.title}{' '}
                            {new Date().getFullYear()}. {footerContent.rights}
                        </p>
                    </div>

                    <p className='footer__signature text-[34px] leading-none sm:text-[40px]'>
                        {footerContent.signature}
                    </p>
                </div>
            </div>

            {/**** SCROLL TOP ****/}
            <button
                type='button'
                aria-label='Volver arriba'
                onClick={() => scrollTop('smooth')}
                className='absolute right-6 top-10 transition-opacity duration-300 hover:opacity-60 lg:right-10'
            >
                <svg
                    viewBox='0 0 24 48'
                    className='h-16 w-5'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1'
                    aria-hidden='true'
                >
                    <path d='M12 47V2M12 2 5 9M12 2l7 7' />
                </svg>
            </button>
        </footer>
    );
};
