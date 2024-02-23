import Image from 'next/image';
import { arrowTop } from '@/assets';
import { useScrollTop } from '@/hooks/useScrollTop';

export const FooterScrollTop = () => {
    const { scrollTop } = useScrollTop();

    const copyRight = `Todos los derechos de autor ${new Date().getFullYear()} @WEDDINGJOSEDANIEL`;

    return (
        <div className='mt-[50px] mb-[50px] md:mt-0'>
            <div className='flex justify-center w-[85%] mx-auto'>
                <div className='text-[10px] mb-12 servicesColor2 title_letter tracking-widest sm:text-[12px]'>
                    <p>{copyRight}</p>
                </div>
            </div>

            <div className='flex justify-center'>
                <button onClick={() => scrollTop('smooth')}>
                    <Image
                        width={300}
                        height={300}
                        src={arrowTop}
                        alt='arrowTop'
                        className='h-[50px] w-[40px]'
                    />
                </button>
            </div>
        </div>
    );
};
