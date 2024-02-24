import Image from 'next/image';
import Link from 'next/link';
import { instagramBlanco } from '@/assets';
import { imageFooterMobile } from '@/constant';

export const FooterImageMobile = () => {
    const isHover = true;

    return (
        <>
            <div className='relative general__image footer__grid my-14'>
                {imageFooterMobile.map(({ image, id }) => (
                    <div key={id}>
                        <Image
                            height={300}
                            width={300}
                            src={image}
                            alt='image'
                            className='h-[200px] w-full object-cover'
                        />
                    </div>
                ))}
                {isHover && (
                    <div className='absolute top-[18%] right-[50%] translate-x-[50%] z-[100]'>
                        <Link
                            href='https://www.instagram.com/weddingjosedaniel'
                            target='_blank'
                        >
                            <div className='flex flex-col justify-between items-center'>
                                <Image
                                    width={300}
                                    height={300}
                                    src={instagramBlanco}
                                    alt='instagram'
                                    className='h-auto w-[20px] my-4'
                                />
                                <h1 className='title_letter text-white text-3xl mb-8'>
                                    Instagram
                                </h1>
                                <h2 className='title_letter text-white text-sm'>
                                    @WEDDINGJOSEDANIEL
                                </h2>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};
