import Link from 'next/link';
import { imageSocialMedia } from '@/constant';
import Image from 'next/image';

export const FooterSocialMedia = () => {
    return (
        <div className='flex justify-center gap-4 my-12'>
            {imageSocialMedia.map(({ image, link, id }) => (
                <Link href={link} prefetch={false} target='_blank' key={id}>
                    <Image
                        width={20}
                        height={50}
                        src={image}
                        alt='socialMedia'
                        className='h-[20px] mx-2'
                    />
                </Link>
            ))}
        </div>
    );
};
