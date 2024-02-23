import Link from 'next/link';
import { useScrollTop } from '@/hooks/useScrollTop';
import { footerLinks } from '@/constant';

export const FooterLinks = () => {
    const { scrollTop } = useScrollTop();

    return (
        <>
            <div className='p-4 servicesColor tracking-widest text_color text-sm hover:text-gray-600 md:p-2'>
                <Link href={'/'}>INICIO</Link>
            </div>
            <div className='p-4 servicesColor tracking-widest text_color text-sm hover:text-gray-600 md:p-2'>
                <Link href={'/galerias/portafolio'}>PORTAFOLIO</Link>
            </div>
        </>
    );
};
