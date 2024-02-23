import { joseDaniel } from '@/assets';
import { useAnimations } from '@/hooks';
import Image from 'next/image';

export const AboutHeader = () => {
    const { fadeOut } = useAnimations();

    return (
        <header
            className='flex flex-col-reverse md:flex-row md:gap-[2rem] xl:gap-[6rem] w-[85%] 2xl:w-[70%] mx-auto mt-[3rem] md:mt-[3rem] items-center'
            data-aos={fadeOut}
        >
            <div className='pt-[4rem]'>
                <p className='mb-[1rem] title_letter servicesColor3 text-[14px] md:text-[16px]  xl:text-[18px]'>
                    DOCUMENTANDO HISTORIAS DE AMOR
                </p>
                <h1 className='mb-[2rem] title_letter servicesColor text-[22px] md:text-[26px]  text-justify'>
                    Momentos que quedarán plasmados en fotografías para luego
                    volver a vivirlos.
                </h1>

                <p className='text-gray-500 text-justify text-[16px] md:text-[18px] '>
                    He tenido la suerte de haber conservado innumerables
                    historias durante los últimos años; me encantaría que la
                    siguiente historia sea la tuya. Creo en fotografiar cada
                    evento y momentos de la vida como realmente suceden, desde
                    la lágrima feliz que corre por tu rostro hasta los pequeños
                    abrazos, los grandes bailes elaborados y los sentimientos de
                    amor expresados a través de gestos únicos, todo capturado y
                    recordado.
                </p>
            </div>
            <div>
                <Image
                    width={3000}
                    height={3000}
                    src={joseDaniel}
                    alt='jose-daniel-photography'
                    className='w-[100%] object-cover rounded-[100%]'
                />
            </div>
        </header>
    );
};
