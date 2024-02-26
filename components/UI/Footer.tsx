import Link from 'next/link';
import {
    useAnimations,
    useMobileLinks,
    useOpenLinks,
    useScrollTop,
} from '@/hooks';

import {
    FooterImages,
    FooterImageMobile,
    FooterSocialMedia,
    FooterScrollTop,
    FooterLinks,
} from './FooterComponents/';

import { InfoDesk, InfoMobile } from '../InfoLinks';

export const Footer = () => {
    const { isOver, handleClickOut, handleClickOver } = useOpenLinks();
    const { isMobile, handleMobileOut, handleMobileOver } = useMobileLinks();
    const { fadeOut } = useAnimations();
    const { scrollTop } = useScrollTop();

    return (
        <>
            {/*** DESKTOP ***/}
            <div className='hidden md:block' data-aos={fadeOut}>
                {/* REDES SOCIALES */}
                <div className='my-20'>
                    <div className='w-[85%] mx-auto my-14'>
                        <h1 className='tracking-widest servicesColor3 title_letter text-center my-10 text-xl'>
                            SIGUEME EN MIS REDES SOCIALES
                        </h1>
                    </div>

                    <FooterImages />
                    <FooterSocialMedia />

                    <h1 className='text-center my-6 servicesColor3 title_letter text-sm sm:text-base tracking-widest'>
                        @WEDDINGJOSEDANIEL
                    </h1>
                </div>
                <div className='py-2'>
                    <div className='w-[60%] m-8 mx-auto flex items-center justify-between xl:w-[40%]'>
                        <FooterLinks />

                        <div className='p-2 text-3xl title_letter servicesColor3 tracking-widest'>
                            <Link
                                passHref
                                href='inicio'
                                onClick={() => scrollTop('smooth')}
                            >
                                WJD
                            </Link>
                        </div>

                        <div
                            className='p-2 servicesColor tracking-widest text-sm hover:text-gray-700 infoLinks'
                            onClick={handleClickOver}
                        >
                            INFO
                            <InfoDesk
                                isOver={isOver}
                                handleClickOut={handleClickOut}
                                scrollTop={scrollTop}
                            />
                        </div>
                        <div className='p-2 servicesColor tracking-widest text-sm hover:text-gray-700'>
                            <Link
                                href='contacto'
                                onClick={() => scrollTop('smooth')}
                            >
                                CONTACTO
                            </Link>
                        </div>
                    </div>
                </div>

                <FooterScrollTop />
            </div>

            {/*** MOBILE ***/}
            <div className='md:hidden' data-aos={fadeOut}>
                {/* REDES SOCIALES */}
                <div className='my-12'>
                    <div className='w-[85%] mx-auto my-14'>
                        <h1 className='tracking-widest servicesColor3 title_letter text-center my-10'>
                            SIGUEME EN MIS REDES SOCIALES
                        </h1>
                    </div>

                    <FooterImageMobile />
                    <FooterSocialMedia />

                    <h1 className='my-6 servicesColor3 title_letter text-sm text-center sm:text-xl tracking-widest'>
                        @WEDDINGJOSEDANIEL
                    </h1>
                </div>
                <div className='w-[85%] mx-auto text-center'>
                    <FooterLinks />

                    <div
                        className='servicesColor p-4 tracking-widest text_color text-sm hover:text-gray-600 infoLinks'
                        onClick={handleMobileOver}
                    >
                        INFO
                        <InfoMobile
                            isMobile={isMobile}
                            handleMobileOut={handleMobileOut}
                            scrollTop={scrollTop}
                            backgroundColor='bg-white'
                            textColor='text-gray-400'
                            textSize='text-[12px]'
                        />
                    </div>

                    {isMobile && (
                        <>
                            <div className='servicesColor p-4 tracking-widest text_color text-center mt-[80px] text-sm hover:text-slate-600'>
                                <Link
                                    href='/contacto'
                                    onClick={() => scrollTop('smooth')}
                                >
                                    CONTACTO
                                </Link>
                            </div>
                        </>
                    )}

                    <div
                        className={`${
                            isMobile
                                ? 'hidden'
                                : 'servicesColor p-4 tracking-widest text_color text-center text-sm hover:text-slate-600'
                        }`}
                    >
                        <Link
                            href='/contacto'
                            onClick={() => scrollTop('smooth')}
                        >
                            CONTACTO
                        </Link>
                    </div>
                </div>

                <FooterScrollTop />
            </div>
        </>
    );
};
