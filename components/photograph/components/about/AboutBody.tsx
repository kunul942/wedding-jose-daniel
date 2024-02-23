import { CollageImages } from './CollageImages';
import { useAnimations } from '@/hooks';

import { joseDanielImageBook } from '@/assets';
import Image from 'next/image';

export const AboutBody = () => {
    const { fadeOut } = useAnimations();
    return (
        <>
            <div
                className='about__background-image w-screen h-[600px] 2xl:h-[850px] object-cover mt-[4rem] relative'
                data-aos={fadeOut}
            >
                <Image
                    width={1000}
                    height={1000}
                    src={joseDanielImageBook}
                    alt='jose-daniel2 '
                    className='rounded-2xl absolute h-150px w-[320px] lg:h-[400px] 2xl:w-[360px] 2xl:h-[400px] object-cover bottom-[-10%] left-[50%]'
                    style={{ transform: 'translatex(-50%)' }}
                />
            </div>
            <div className='w-full  pb-[3rem] bg-gray-200 text-center pt-[5rem] 2xl:pt-[7rem] '>
                <h2 className='text-[38px] xl:text-[68px] title_letter servicesColor3'>
                    PUBLICACIONES
                </h2>
                <p
                    style={{ color: '#878787' }}
                    className='text-white mt-[1rem] w-[70%] xl:w-[30%] xl:text-[18px] mx-auto text-justify'
                >
                    Ciudad de Guatemala, Antigua Guatemala, San Lucas
                    Sacatepequez, San Juan Sacatepequez, Amatitlán, Villa
                    Canales, Villa Nueva, Atitlán, Monterrico
                </p>
            </div>
            <div className='pt-[3.5rem] secondBackgroundColor'>
                <div className='flex-col-reverse flex md:flex-col  '>
                    <div className='w-[80%] mx-auto flex flex-col md:flex-row gap-[3rem]'>
                        <div style={{ flex: 1 }}>
                            <p className='mb-[2rem] mt-[2rem] md:mt-0 servicesColor text-justify'>
                                ¡Hola! Soy José Daniel. Si me permites seré tu
                                fotográfo. Comencé en este mundo de las bodas
                                cuando me casé. Compré mi camara para que
                                alguien me hiciera fotos con ella, me regalaron
                                un taller al comprarla y me di cuenta de que no
                                era nada fácil, pero también de que hacer fotos
                                era mi pasión. Así que decidí dedicar horas para
                                aprender, hasta que finalmente decidí ser feliz
                                haciendo lo que amo y gracias a personas como tu
                                que han confiado en mi trabajo, hoy estoy aquí
                                documentando el día más feliz de los enamorados.
                            </p>
                            <p className='servicesColor text-justify'>
                                Soy un apasionado fotógrafo de bodas con 4 años
                                de experiencia capturando momentos inolvidables.
                                Mi amor por la fotografía se combina con mi
                                compromiso en el arte de contar historias a
                                través de imágenes. Casado desde hace cinco años
                                y padre de una hermosa niña, entiendo la
                                importancia de los momentos especiales
                            </p>
                        </div>
                        <div style={{ flex: 1 }}>
                            <p className='servicesColor text-justify'>
                                Mi misión va más allá de tomar fotos; se trata
                                de documentar el amor, la alegría y la
                                autenticidad que define cada boda. En cada
                                disparo, busco capturar la esencia pura del amor
                                y la felicidad. Estoy aquí para servirte y para
                                asegurarme de que cada detalle de tu día
                                especial se conserve de manera única y
                                memorable.
                            </p>
                            <p className='servicesColor my-[1rem] text-justify'>
                                ¡Permíteme ser el narrador de tu historia y
                                eternizar tus momentos de amor con imágenes que
                                perdurarán para siempre!
                            </p>
                        </div>
                    </div>
                    <h2 className='md:mt-[3rem] text-center text-[20px] md:text-[24px] xl:text-[28px]  title_letter w-[85%] md:w-[50%] mx-auto servicesColor3'>
                        Documentando todo tipo de historias, desde bodas,
                        compromisos, hasta maternidad y familias.
                    </h2>
                </div>

                <CollageImages />
            </div>
        </>
    );
};
