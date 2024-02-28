import { HomeCarousel } from './HomeCarousel';
import { useAnimations } from '@/hooks';

import { resumeImage, resumeImageMobile } from '@/assets';
import Link from 'next/link';
import Image from 'next/image';

export const HomeInfo = () => {
    const { fadeOut } = useAnimations();

    return (
        <>
            <div>
                {/* <div className='h-[20px] w-full bg-gray-100 md:hidden'></div> */}

                {/***MAIN IMAGE***/}
                <div data-aos={fadeOut}>
                    <HomeCarousel />
                </div>

                {/***DESKTOP***/}
                <div className='hidden md:block' data-aos={fadeOut}>
                    {/****  SECTION LINKS ****/}
                    <div className='my-16 w-[70%] mx-auto flex justify-between items-center'>
                        <div className='text-center my-12 title_letter text-base 2xl:text-2xl hoverEffect'>
                            <Link href='/galerias/bodas'>
                                <p className='colorBackground text-[18px]'>
                                    01
                                </p>
                                <div className='servicesColor2 mt-2 mb-6 tracking-widest'>
                                    PORTAFOLIO
                                </div>
                            </Link>
                        </div>
                        <div className='borderInfo h-[120px]'></div>

                        <div className='text-center my-12 title_letter text-base 2xl:text-2xl hoverEffect'>
                            <Link href='/acerca'>
                                <p className='colorBackground text-[18px]'>
                                    03
                                </p>
                                <div className='servicesColor2 mt-2 mb-6 tracking-widest'>
                                    CONOCE A JOSE
                                </div>
                            </Link>
                        </div>
                        <div className='borderInfo h-[120px]'></div>

                        <div className='text-center my-12 title_letter text-base 2xl:text-2xl hoverEffect'>
                            <Link href='/paquetes'>
                                <p className='colorBackground text-[18px]'>
                                    02
                                </p>
                                <div className='servicesColor2 mt-2 mb-6 tracking-widest'>
                                    PAQUETES
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/**** RESUME ****/}
                    <div className='py-10'>
                        <div className='w-[85%] mx-auto'>
                            <div className='flex gap-[50px] xl:gap-[170px] items-center'>
                                <div>
                                    <Image
                                        width={5000}
                                        height={5000}
                                        src={resumeImage}
                                        alt='resumeImage'
                                        className='h-[400px] lg:w-[900px] 2xl:h-[500px] 2xl:w-[850px] rounded-[100%] object-cover w-full shadow-2xl'
                                    />
                                </div>

                                <div className='w-[95%] mx-auto'>
                                    <div className='mb-14'>
                                        <h1 className='text-center servicesColor3 title_letter my-8 tracking-widest text-2xl 2xl:text-3xl'>
                                            Wedding José Daniel
                                        </h1>
                                        <p className='text-gray-500 tracking-widest text-sm 2xl:text-base'>
                                            Mi estilo es una mezcla de
                                            documental, con un enfoque en
                                            capturar las emociones y
                                            personalidades auténticas de mis
                                            clientes. Creo que las mejores fotos
                                            provienen de interacciones
                                            naturales, por eso me esfuerzo por
                                            crear una atmósfera relajada y
                                            cómoda durante cada toma.
                                        </p>
                                    </div>

                                    <div>
                                        <h1 className='text-center servicesColor3 title_letter my-8 tracking-widest text-2xl 2xl:text-3xl'>
                                            Congelando los momentos más
                                            importantes de la vida para
                                            siempre...
                                        </h1>
                                        <p className='text-gray-500 tracking-widest text-sm 2xl:text-base'>
                                            Me encanta conocer las historias de
                                            los demás y ser parte de ellas,
                                            creando imágenes que harán llorar,
                                            reir y emocionarse en todo momento.
                                            Mi objetivo es ayudar a recordar
                                            todos los grandes y pequeños
                                            momentos que suceden en un día tan
                                            mágico: capturar el día de su boda
                                            de una manera única y especial.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/******** MOBILE ********/}
                {/****  SECTION LINKS ****/}
                <div className='md:hidden' data-aos={fadeOut}>
                    <div className='my-20'>
                        <div className='text-center title_letter text-xl'>
                            <p className='colorBackground text-[12px] text-base'>
                                01
                            </p>
                            <div className='servicesColor mt-2 mb-6 tracking-widest'>
                                <Link href='/galerias/bodas'>PORTAFOLIO</Link>
                            </div>
                            <div className='borderInfo--mobile w-[25%] mx-auto'></div>
                        </div>

                        <div className='text-center my-12 title_letter text-xl'>
                            <p className='colorBackground text-[12px] text-base'>
                                03
                            </p>
                            <div className='servicesColor mt-2 tracking-widest'>
                                <Link href='/acerca'>CONOCE A JOSE</Link>
                            </div>
                        </div>
                        <div className='borderInfo--mobile w-[25%] mx-auto'></div>

                        <div className='text-center my-12 title_letter text-xl'>
                            <p className='colorBackground text-[12px] text-base'>
                                02
                            </p>
                            <div className='servicesColor mt-2 mb-6 tracking-widest'>
                                <Link href='/paquetes'>PAQUETES</Link>
                            </div>
                            <div className='borderInfo--mobile w-[25%] mx-auto'></div>
                        </div>
                    </div>

                    {/**** RESUME ****/}
                    <div data-aos={fadeOut}>
                        <div className='text_color title_letter tracking-widest text-xl sm:text-2xl'>
                            <div className='relative general__image'>
                                <Image
                                    src={resumeImageMobile}
                                    alt='resume'
                                    className='h-[500px] w-full object-cover my-10 sm:h-[520px]'
                                />
                            </div>
                            <div className='absolute top-[7%] right-[33%] translate-x-[25%] z-[100]'>
                                <h1 className='text-center my-6 text-white'>
                                    Congelando los momentos para siempre...
                                </h1>

                                <p className='text-gray-200 tracking-widest text-base text-justify sm:text-xl'>
                                    Me encanta conocer las historias de los
                                    demás y ser parte de ellas, creando imágenes
                                    que harán llorar, reir y emocionarse en todo
                                    momento. Mi objetivo es ayudar a recordar
                                    todos los grandes y pequeños momentos que
                                    suceden en un día tan mágico: capturar el
                                    día de su boda de una manera única y
                                    especial.
                                </p>
                            </div>
                        </div>
                        <div className='borderInfo--mobile w-[25%] mx-auto mt-16'></div>
                    </div>
                </div>
            </div>
        </>
    );
};
