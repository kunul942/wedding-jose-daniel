import { paqueteBasic, paquetePremium, paqueteVip } from '@/assets';
import { useAnimations } from '@/hooks';
import Image from 'next/image';

export const PaquetesServices = () => {
    const { fadeOut } = useAnimations();
    return (
        <>
            <div className='hidden md:block'>
                <div
                    className='mt-2 xl:mt-10 md:pb-2 xl:pb-24 2xl:pb-[125px] 2xl:mt-16'
                    data-aos={fadeOut}
                >
                    <div className='md:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto sm:my-10 xl:my-10 relative'>
                        <Image
                            height={3000}
                            width={3000}
                            src={paqueteVip}
                            alt='paqueteBasic'
                            className='absolute top-[10%] md:h-[400px] md:w-[400px] xl:h-[90vh] 2xl:h-[85vh] w-[540px] 2xl:w-[600px] object-cover'
                        />
                        <div className='w-[80%] ml-auto secondBackgroundColor h-[90vh] flex justify-end'>
                            <div className='w-[60%] md:pt-12 2xl:pt-24'>
                                <h1 className='text-center text-xl text-gray-600 servicesColor3 font-bold md:text-2xl'>
                                    BASIC
                                </h1>
                                <div className='flex justify-center md:py-6 2xl:py-8'>
                                    <div className='borderInfo md:h-[30px] 2xl:h-[50px]'></div>
                                </div>
                                <p className='text-center text-gray-400 tracking-widest md:text-xs py-4 2xl:text-base'>
                                    Fotos ilimitadas.
                                    <br />
                                    <br />
                                    Cobertura por 7 horas continuas.
                                    <br />
                                    <br />
                                    Preparativos de la novia.
                                    <br />
                                    <br />
                                    Ceremonia.
                                    <br />
                                    <br />
                                    Sesión artistica.
                                    <br />
                                    <br />
                                    Recepción.
                                    <br />
                                    <br />
                                    Sesión pre-boda o post-boda.
                                    <br />
                                    <br />
                                    Precio: $365.00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className='mt-2 xl:mt-10 md:pb-2 xl:pb-24 2xl:pb-[125px]'
                    data-aos={fadeOut}
                >
                    <div className='md:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto sm:my-10 md:my-4 xl:my-10 relative'>
                        <Image
                            height={3000}
                            width={3000}
                            src={paqueteBasic}
                            alt='paquetePremium'
                            className='absolute top-[10%] right-0 md:h-[400px] md:w-[400px] xl:h-[90vh] 2xl:h-[85vh] w-[540px] 2xl:w-[600px] object-cover'
                        />
                        <div className='w-[80%] secondBackgroundColor h-[90vh] flex justify-start'>
                            <div className='w-[60%] md:pt-12 2xl:pt-24'>
                                <h1 className='text-center text-xl text-gray-600 servicesColor3 font-bold md:text-2xl'>
                                    ESTANDAR
                                </h1>
                                <div className='flex justify-center md:py-6 2xl:py-8'>
                                    <div className='borderInfo md:h-[30px] 2xl:h-[50px]'></div>
                                </div>
                                <p className='text-center text-gray-400 tracking-widest sm:text-base md:text-xs py-4 2xl:text-base'>
                                    Fotos ilimitadas.
                                    <br />
                                    <br />
                                    Cobertura por 7 horas continuas.
                                    <br />
                                    <br />
                                    Preparativos de la novia.
                                    <br />
                                    <br />
                                    Ceremonia.
                                    <br />
                                    <br />
                                    Sesión artistica.
                                    <br />
                                    <br />
                                    Recepción.
                                    <br />
                                    <br />
                                    Sesión pre-boda o post-boda.
                                    <br />
                                    <br />
                                    Video cinematográfico:
                                    <br />
                                    <br />
                                    El video durará 5-7 minutos,
                                    <br />
                                    incluye tomas con drone,
                                    <br />
                                    colorización y edición completa.
                                    <br />
                                    <br />
                                    Precio: $635.00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className='mt-2 xl:mt-10 md:pb-12 xl:pb-24 2xl:pb-[200px]'
                    data-aos={fadeOut}
                >
                    <div className='md:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto sm:my-10 md:my-4 xl:my-10 relative'>
                        <Image
                            height={3000}
                            width={3000}
                            src={paquetePremium}
                            alt='paqueteVip'
                            // className='absolute top-[10%] h-[600px] w-[540px] 2xl:h-[600px] 2xl:w-[600px] object-cover'
                            className='absolute top-[10%] md:h-[400px] md:w-[400px] xl:h-[90vh] w-[540px] 2xl:w-[600px] object-cover'
                        />
                        <div className='w-[80%] ml-auto secondBackgroundColor flex justify-end h-[90vh]'>
                            <div className='w-[60%] md:pt-12 2xl:pt-24'>
                                <h1 className='text-center text-xl text-gray-600 servicesColor3 font-bold md:text-2xl'>
                                    PREMIUM
                                </h1>
                                <div className='flex justify-center md:py-6 2xl:py-8'>
                                    <div className='borderInfo md:h-[30px] 2xl:h-[50px]'></div>
                                </div>
                                <p className='text-center text-gray-400 tracking-widest md:text-xs py-4 2xl:text-base'>
                                    Fotos ilimitadas.
                                    <br />
                                    <br />
                                    Cobertura por 10 horas continuas.
                                    <br />
                                    <br />
                                    Preparativos de la novia.
                                    <br />
                                    <br />
                                    Ceremonia.
                                    <br />
                                    <br />
                                    Sesión artistica.
                                    <br />
                                    <br />
                                    Recepción.
                                    <br />
                                    <br />
                                    Sesión pre-boda o post-boda.
                                    <br />
                                    <br />
                                    Video cinematográfico:
                                    <br />
                                    <br />
                                    El video durará 10 minutos,
                                    <br />
                                    incluye tomas con drone,
                                    <br />
                                    colorización y edición completa.
                                    <br />
                                    <br />
                                    Precio: $855.00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className='md:hidden'>
                <div
                    className='mt-10 secondBackgroundColor pb-6'
                    data-aos={fadeOut}
                >
                    <div className='w-[90%] mx-auto'>
                        <Image
                            height={3000}
                            width={3000}
                            src={paqueteVip}
                            alt='paqueteBasic'
                            quality={50}
                            className='h-[500px] w-full rounded-2xl object-cover sm:h-[700px] md:h-[600px] 2xl:h-[700px]'
                        />
                        <h1 className='text-center text-xl pt-8 pb-4 text-gray-600 servicesColor3 font-bold sm:text-3xl'>
                            BASIC
                        </h1>
                        <div className='flex justify-center py-2'>
                            <div className='borderInfo h-[25px]'></div>
                        </div>
                        <p className='text-[14px] text-center tracking-widest text-gray-400 pt-4 pb-24 sm:text-base md:py-4'>
                            Fotos ilimitadas.
                            <br />
                            <br />
                            Cobertura por 7 horas continuas.
                            <br />
                            <br />
                            Preparativos de la novia.
                            <br />
                            <br />
                            Ceremonia.
                            <br />
                            <br />
                            Sesión artistica.
                            <br />
                            <br />
                            Recepción.
                            <br />
                            <br />
                            Sesión pre-boda o post-boda.
                            <br />
                            <br />
                            Precio: $365.00
                        </p>
                    </div>
                </div>

                <div
                    className='mt-10 secondBackgroundColor pb-6'
                    data-aos={fadeOut}
                >
                    <div className='w-[90%] mx-auto'>
                        <Image
                            height={3000}
                            width={3000}
                            src={paqueteBasic}
                            alt='paquetePremium'
                            className='h-[500px] w-full object-center rounded-2xl object-cover sm:h-[700px] md:h-[600px] 2xl:h-[700px]'
                            quality={50}
                        />
                        <h1 className='text-center text-xl pt-8 pb-4 text-gray-600 servicesColor3 font-bold sm:text-3xl'>
                            ESTANDAR
                        </h1>
                        <div className='flex justify-center py-2'>
                            <div className='borderInfo h-[25px]'></div>
                        </div>
                        <p className='text-[14px] text-center tracking-widest text-gray-400 pt-4 pb-24 sm:text-base md:py-4'>
                            Fotos ilimitadas.
                            <br />
                            <br />
                            Cobertura por 7 horas continuas.
                            <br />
                            <br />
                            Preparativos de la novia.
                            <br />
                            <br />
                            Ceremonia.
                            <br />
                            <br />
                            Sesión artistica.
                            <br />
                            <br />
                            Recepción.
                            <br />
                            <br />
                            Sesión pre-boda o post-boda.
                            <br />
                            <br />
                            Video cinematográfico:
                            <br />
                            <br />
                            El video durará 5-7 minutos,
                            <br />
                            incluye tomas con drone,
                            <br />
                            colorización y edición completa.
                            <br />
                            <br />
                            Precio: $635.00
                        </p>
                    </div>
                </div>

                <div
                    className='mt-10 secondBackgroundColor pb-6'
                    data-aos={fadeOut}
                >
                    <div className='w-[90%] mx-auto'>
                        <Image
                            height={3000}
                            width={3000}
                            src={paquetePremium}
                            alt='paqueteVip'
                            quality={50}
                            className='h-[500px] w-full object-center rounded-2xl object-cover sm:h-[700px] md:h-[600px] 2xl:h-[700px]'
                        />
                        <h1 className='text-center text-xl pt-8 pb-4 text-gray-600 servicesColor3 font-bold sm:text-3xl'>
                            PREMIUM
                        </h1>
                        <div className='flex justify-center py-4 sm:text-base'>
                            <div className='borderInfo h-[25px]'></div>
                        </div>
                        <p className='text-[14px] text-center tracking-widest text-gray-400 pt-4 pb-24 sm:text-base md:py-4'>
                            Fotos ilimitadas.
                            <br />
                            <br />
                            Cobertura por 10 horas continuas.
                            <br />
                            <br />
                            Preparativos de la novia.
                            <br />
                            <br />
                            Ceremonia.
                            <br />
                            <br />
                            Sesión artistica.
                            <br />
                            <br />
                            Recepción.
                            <br />
                            <br />
                            Sesión pre-boda o post-boda.
                            <br />
                            <br />
                            Video cinematográfico:
                            <br />
                            <br />
                            El video durará 10 minutos,
                            <br />
                            incluye tomas con drone,
                            <br />
                            colorización y edición completa.
                            <br />
                            <br />
                            Precio: $855.00
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
