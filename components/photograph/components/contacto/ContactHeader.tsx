import { useAnimations } from '@/hooks';

export const ContactHeader = () => {
    const { fadeOut } = useAnimations();
    return (
        <>
            <div data-aos={fadeOut}>
                <h2 className='servicesColor3 mt-[5rem] mb-[2rem] text-[28px] title_letter'>
                    Empecemos tu viaje
                </h2>
                <p className='servicesColor text-justify'>
                    Antes que nada, quisiera darte las gracias por haber tomado
                    en cuenta mi trabajo para un día tan importante como tu
                    boda. Eso me llena de orgullo y satisfaccion al saber que
                    junto de la mano de Dios he crecido profesionalmente. Ahora
                    si, empecemos...
                </p>
            </div>
        </>
    );
};
