import Link from 'next/link';
import { useAnimations } from '@/hooks';
import { daniel4 } from '@/assets';
import Image from 'next/image';

export const YourStory = () => {
    const { fadeOut } = useAnimations();

    const CURRENT_YEAR = new Date().getFullYear();
    const NEXT_YEAR = new Date().getFullYear() + 1;

    return (
        <>
            {/* Desktop */}
            <div
                className='hidden md:block mb-[170px] xl:mb-[200px] 2xl:mb-[250px]'
                data-aos={fadeOut}
            >
                <div className='py-[5rem] xl:px-[5rem] backgroundColor relative h-[60vh] xl:h-[85vh]'>
                    <div className='w-[95%] mx-auto h-[180px]'>
                        <h2 className='title_letter text-center text-2xl text-white w-[50%] ml-auto tracking-widest xl:text-3xl 2xl:text-4xl'>
                            RESERVAS ACTUALMENTE PARA LA TEMPORADA{' '}
                            {CURRENT_YEAR} & {NEXT_YEAR}
                        </h2>
                        <Image
                            priority
                            height={5000}
                            width={5000}
                            src={daniel4}
                            alt='jose-daniel-profile'
                            className='absolute right-[50%] top-[30%] 2xl:top-[20%] h-[50vh] object-cover xl:h-[80vh] xl:w-[30%] 2xl:h-[85vh]'
                        />

                        <div>
                            <Link
                                passHref
                                href='/contacto'
                                className='text-white p-4 bg-color-botton rounded-2xl absolute bottom-0 right-[20%]  xl:p-6 xl:text-sm 2xl:text-base'
                                style={{
                                    transform: 'translate(20%, 50%)',
                                }}
                            >
                                CONTACTAME
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className='md:hidden'>
                {/* <div className='p-[2rem] xl:py-[3rem] xl:px-[5rem] backgroundColor relative'> */}
                <div className='mt-[150px] sm:mt-[470px] p-[2rem] xl:py-[3rem] xl:px-[5rem] backgroundColor relative'>
                    <div className='w-[70%] mx-auto h-[300px] md:h-[180px] '>
                        <h2 className='text-center md:text-right title_letter text-[16px] text-white sm:text-[20px] '>
                            RESERVAS PARA LA TEMPORADA {CURRENT_YEAR} &{' '}
                            {NEXT_YEAR}
                        </h2>
                        <Image
                            height={1000}
                            width={1000}
                            src={daniel4}
                            alt='jose-daniel-profile'
                            className='absolute right-[1px] top-[40%] h-[250px] object-cover'
                        />

                        <Link
                            passHref
                            href='/contacto'
                            className='hoverEffect text-white bg-color-botton p-4 rounded-2xl text-[12px] absolute bottom-0 right-[20%] '
                            style={{
                                transform: 'translate(20%, 50%)',
                            }}
                        >
                            CONTACTAME
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
