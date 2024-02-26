import { useContext } from 'react';
import Link from 'next/link';

import { infoLinksSections } from '@/constant';
import { CheckOutsideClick } from '@/utils/CheckOutisdeClick';

import { PhotographyContext } from './photograph/context';

export const InfoDesk = ({ handleClickOut, isOver }: any) => {
    return (
        <CheckOutsideClick onCloseClick={handleClickOut}>
            <div
                className={`infoChild--desk  ${
                    isOver ? 'infoChild--active' : ''
                }`}
            >
                <div className='flex justify-between backgroundColor p-8'>
                    <div className='text_color tracking-wide w-[150px]'>
                        <div className='text-xs text-gray-100 pb-6 text-center hover:text-gray-300'>
                            <Link href={'/acerca'}>
                                {infoLinksSections.about}
                            </Link>
                        </div>
                        <div className='text-xs text-gray-100 text-center hover:text-gray-300'>
                            <Link href={'/paquetes'}>
                                {infoLinksSections.paquetes}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </CheckOutsideClick>
    );
};

export const InfoMobile = ({
    handleMobileOut,
    isMobile,
    backgroundColor,
    textColor,
    textSize,
}: any) => {
    const { handleCloseMenu } = useContext(PhotographyContext) as any;

    return (
        <CheckOutsideClick onCloseClick={handleMobileOut}>
            <div
                className={`infoChild--mobile ${
                    isMobile ? 'infoChild--active' : ''
                }`}
            >
                <div className={`flex justify-between ${backgroundColor} p-6`}>
                    <div className={`${textSize} tracking-wide w-[150px]`}>
                        <div
                            className={`${textColor} pb-6 text-center hover:text-gray-300`}
                            onClick={handleCloseMenu}
                        >
                            <Link href={'/acerca'}>
                                {infoLinksSections.about}
                            </Link>
                        </div>
                        <div
                            className={`${textColor} text-center hover:text-gray-300`}
                            onClick={handleCloseMenu}
                        >
                            <Link href='/paquetes'>
                                {infoLinksSections.paquetes}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </CheckOutsideClick>
    );
};
