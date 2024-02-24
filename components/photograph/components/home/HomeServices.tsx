import Link from 'next/link';
import Image from 'next/image';

import { useAnimations } from '@/hooks';
import { BodaImage, XVImage, saveDateImage } from '@/assets';
import { homeServices, homeServicesImage } from '@/constant';

export const HomeServices = () => {
    const { fadeOut } = useAnimations();
    return (
        <>
            {/***DESKTOP****/}
            <div className='hidden md:block' data-aos={fadeOut}>
                <div className='md:w-[80%] xl:w-[72%] mx-auto my-20'>
                    <div className='flex gap-12'>
                        {homeServicesImage.map((services) => (
                            <div
                                key={services.id}
                                className='flex_services hoverEffect'
                            >
                                <Link href={services.link}>
                                    <Image
                                        width={3000}
                                        height={3000}
                                        src={services.img}
                                        alt='services'
                                        className='hoverEffect h-[600px] object-cover rounded-2xl shadow-2xl sm:h-[700px] md:h-[500px] 2xl:h-[700px]'
                                    />
                                    <h1 className='servicesColor3 title_letter text-center text-xl my-12 tracking-widest 2xl:text-2xl'>
                                        {services.text}
                                    </h1>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/*** FRASE DE FOTOGRAFO ***/}
                <div className='bg-gray-100 my-20'>
                    <div className='w-[85%] mx-auto py-14'>
                        <div className='mb-6'>
                            <h1 className='text-center servicesColor title_letter text-xl sm:text-2xl'>
                                &quot;Hacer una foto, es capturar un
                                sentimiento.&quot;
                            </h1>
                        </div>
                        <div className='servicesColor3 italic title_letter text-sm text-center'>
                            José Daniel
                        </div>
                    </div>
                </div>
            </div>

            {/**** MOBILE ***/}
            <div className='md:hidden' data-aos={fadeOut}>
                <div className='flex flex-col my-6 w-[100%] mx-auto'>
                    <div className='mt-6 mb-12 text-center text-2xl title_letter text_color'>
                        <h1 className='text-xl title_letter servicesColor3 tracking-widest sm:text-2xl'>
                            MIRA MÁS DE MI TRABAJO
                        </h1>
                    </div>

                    <div className='relative general__image general__image--smooth'>
                        <Link href='/galerias/quince-años'>
                            <Image
                                width={3000}
                                height={3000}
                                src={XVImage.src}
                                alt='XVImage'
                                className='h-[500px] w-full object-cover sm:h-[750px] shadow-xl'
                            />
                            <div className='absolute top-[45%] right-[50%] translate-x-[50%] z-[100]'>
                                <h1 className='text-white title_letter text-[18px] tracking-widest sm:text-2xl'>
                                    {homeServices.xv.toUpperCase()}
                                </h1>
                            </div>
                        </Link>
                    </div>

                    <div className='relative general__image general__image--smooth'>
                        <Link href='/galerias/portafolio'>
                            <Image
                                width={3000}
                                height={3000}
                                src={BodaImage.src}
                                alt='bodaImage'
                                className='h-[500px] w-full object-cover sm:h-[750px] shadow-xl'
                            />
                            <div className='absolute top-[45%] right-[50%] translate-x-[50%] z-[100]'>
                                <h1 className='text-white title_letter text-[18px] tracking-widest sm:text-2xl'>
                                    {homeServices.bodas.toUpperCase()}
                                </h1>
                            </div>
                        </Link>
                    </div>
                    <div className='relative general__image general__image--smooth'>
                        <Link href='/galerias/save-date'>
                            <Image
                                width={3000}
                                height={3000}
                                src={saveDateImage.src}
                                alt='saveDateImage'
                                className='h-[500px] w-full object-cover sm:h-[750px]'
                            />
                            <div className='absolute top-[35%] right-[50%] translate-x-[50%] z-[100]'>
                                <h1 className='text-white title_letter text-[18px] tracking-widest my-10 sm:text-2xl'>
                                    {homeServices.saveDate.toUpperCase()}
                                </h1>
                            </div>
                            <div className='bg-gray-200 h-[2px] w-full'></div>
                        </Link>
                    </div>
                </div>

                {/*** FRASE DE FOTOGRAFO ***/}
                <div className='bg-gray-100'>
                    <div className='w-[85%] mx-auto py-14'>
                        <div className='mb-6'>
                            <h2 className='text-center servicesColor title_letter text-xl sm:text-2xl'>
                                &quot;Hacer una foto, es congelar un
                                sentimiento&quot;.
                            </h2>
                        </div>
                        <div className='servicesColor3 italic title_letter text-sm text-center'>
                            José Daniel
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
