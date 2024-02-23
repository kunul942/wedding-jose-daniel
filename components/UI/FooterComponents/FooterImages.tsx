import { useState } from 'react';

import { imageFooter } from '@/constant';
import { instagramBlanco } from '@/assets';
import Link from 'next/link';
import Image from 'next/image';

export const FooterImages = () => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseOver = () => {
        setIsHover(true);
    };

    const handleMouseOut = () => {
        setIsHover(false);
    };

    return (
        <>
            <div
                className={`flex my-14 ${
                    isHover ? `relative general__image` : ''
                }`}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                {imageFooter.map((footer) => (
                    <div key={footer.id} className='flex_footer'>
                        <Image
                            width={5000}
                            height={5000}
                            src={footer.image}
                            alt='image'
                            className='h-[300px] w-full object-cover'
                        />
                    </div>
                ))}
            </div>

            {isHover && (
                <div
                    className='absolute top-[16%] right-[50%] translate-x-[50%] z-[100]'
                    onMouseOver={handleMouseOver}
                >
                    <Link
                        href={'https://www.instagram.com/weddingjosedaniel'}
                        target='_blank'
                    >
                        <div className='flex flex-col justify-between items-center'>
                            <Image
                                width={300}
                                height={300}
                                src={instagramBlanco}
                                alt='instagram'
                                className='h-auto w-[30px] my-4'
                            />
                            <h1 className='title_letter text-white text-4xl mb-8'>
                                Instagram
                            </h1>
                            <h2 className='title_letter text-white text-base'>
                                @WEDDINGJOSEDANIEL
                            </h2>
                        </div>
                    </Link>
                </div>
            )}
        </>
    );
};
