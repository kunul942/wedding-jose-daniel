import Image from 'next/image';
import { useContext } from 'react';
import Link from 'next/link';

import { PhotographyContext } from '../photograph/context';
import { InfoMobile, InfoDesk } from '../InfoLinks';
import { useMobileLinks, useOpenLinks } from '@/hooks/';

import { close, menu } from '@/assets';
import { navbarLinks } from '@/constant';

export const Navbar = () => {
    const { openMenu, handleCloseMenu, handleOpenMenu } = useContext(
        PhotographyContext
    ) as any;

    const { isOver, handleClickOut, handleClickOver } = useOpenLinks();
    const { isMobile, handleMobileOut, handleMobileOver } = useMobileLinks();

    return (
        <>
            <div>
                <div className='z-[1000000] relative hidden w-[85%] m-8 mx-auto md:flex items-center justify-between animate__animated animate__fadeIn'>
                    <Link
                        className='p-2 text-xs servicesColor2 tracking-widest 2xl:text-sm hover:text-gray-800'
                        href={'/'}
                        passHref
                    >
                        {navbarLinks.inicio}
                    </Link>

                    <Link
                        className='p-2 text-xs servicesColor2 tracking-widest 2xl:text-sm hover:text-gray-800'
                        href={'/galerias/portafolio'}
                        passHref
                    >
                        {navbarLinks.portafolio}
                    </Link>

                    <Link
                        className='p-2 text-xl title_letter servicesColor3 tracking-widest xl:text-3xl 2xl:text-4xl 2xl:p-4'
                        href={'/'}
                        passHref
                    >
                        {navbarLinks.name}
                    </Link>

                    <div
                        className='p-2 text-xs servicesColor2 tracking-widest 2xl:text-sm hover:text-gray-800 infoLinks'
                        onClick={handleClickOver}
                    >
                        {navbarLinks.info}
                        <InfoDesk
                            isOver={isOver}
                            handleClickOut={handleClickOut}
                        />
                    </div>

                    <Link
                        className='p-2 text-xs servicesColor2 tracking-widest 2xl:text-sm hover:text-gray-800'
                        href={'contacto'}
                    >
                        {navbarLinks.contacto}
                        passHref
                    </Link>
                </div>
                <div>
                    <div
                        className={`${
                            openMenu
                                ? 'hidden'
                                : 'w-[85%] my-4 mx-auto sm:my-8 flex justify-between items-center animate__animated animate__fadeIn md:hidden'
                        }`}
                    >
                        <h1 className='p-2 text-[18px] title_letter servicesColor tracking-widest sm:text-3xl'>
                            <Link href={'/'} passHref>
                                {navbarLinks.name}
                            </Link>
                        </h1>
                        <Image
                            height={500}
                            width={500}
                            src={menu}
                            alt='menu'
                            className='p-2 h-[35px] w-[40px] sm:h-[40px] sm:w-[50px]'
                            onClick={handleOpenMenu}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile */}
            {openMenu && (
                <div className='backgroundColor h-screen animate__animated animate__fadeIn'>
                    <div className='backgroundColor'>
                        <div className='mx-12 py-6'>
                            <Image
                                width={500}
                                height={500}
                                src={close.src}
                                alt='close'
                                className='p-2 h-[40px] w-[40px] mx-auto mb-6'
                                onClick={handleCloseMenu}
                            />
                            <hr className='border-white' />

                            <div>
                                <div className='text-white text-center text-sm my-12 hover:text-gray-300'>
                                    <Link
                                        href={'/'}
                                        onClick={handleCloseMenu}
                                        passHref
                                    >
                                        {navbarLinks.inicio}
                                    </Link>
                                </div>
                                <hr className='border-gray-300' />

                                <div className='text-white text-center text-sm my-12 hover:text-gray-300'>
                                    <Link
                                        href={'/galerias/portafolio'}
                                        onClick={handleCloseMenu}
                                        passHref
                                    >
                                        {navbarLinks.portafolio}
                                    </Link>
                                </div>
                                <hr className='border-gray-300' />

                                <div
                                    className='text-white text-center text-sm my-12 infoLinks hover:text-gray-300'
                                    onClick={handleMobileOver}
                                >
                                    {navbarLinks.info}
                                    <InfoMobile
                                        isMobile={isMobile}
                                        handleMobileOut={handleMobileOut}
                                        backgroundColor='backgroundColor'
                                        textColor='text-gray-100'
                                        textSize='text-sm'
                                    />
                                </div>

                                {isMobile && (
                                    <>
                                        <hr className='border-gray-300 mt-[150px] mb-12' />

                                        <div className='text-white text-center mb-12 text-sm hover:text-gray-300'>
                                            <Link
                                                href={'/contacto'}
                                                onClick={handleCloseMenu}
                                                passHref
                                            >
                                                {navbarLinks.contacto}
                                            </Link>
                                        </div>
                                        <hr className='border-gray-300' />
                                    </>
                                )}

                                <hr className='border-gray-300' />

                                <div
                                    className={`${
                                        isMobile
                                            ? 'hidden'
                                            : 'text-white text-center text-sm my-12 hover:text-gray-300'
                                    }`}
                                >
                                    <Link
                                        href={'/contacto'}
                                        onClick={handleCloseMenu}
                                        passHref
                                    >
                                        {navbarLinks.contacto}
                                    </Link>
                                </div>
                                <hr className='border-gray-300' />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
