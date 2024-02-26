import Link from 'next/link';
import { useAnimations } from '@/hooks';

export const PreguntasFrecuents = () => {
    const { fadeOut } = useAnimations();

    return (
        <div
            className='w-[90%] md:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto my-14'
            data-aos={fadeOut}
        >
            <h1 className='servicesColor3 text-center mb-8 text-2xl'>
                PREGUNTAS FRECUENTES
            </h1>

            <div className='md:flex gap-20'>
                <div className='md:w-[50%] tracking-widest'>
                    <div>
                        <h2 className='servicesColor3 py-4 text-center'>
                            CUÁLES SON LOS METODOS DE PAGO?
                        </h2>
                        <p className='text-gray-500 text-sm py-4 text-justify'>
                            Tu paquete de fotografía puedes cancelarlo por medio
                            de deposito, transferencia a cuenta bancaria.
                        </p>
                    </div>
                    <div className='borderInfo--mobile w-[12%] md:w-[16%] mx-auto my-8'></div>
                    <div>
                        <h2 className='servicesColor3 py-4 text-center'>
                            QUÉ SON LAS FOTOGRAFÍAS ILIMITADAS?
                        </h2>
                        <p className='text-gray-500 text-sm py-4 text-justify'>
                            Todos los paquetes cuentan con fotografías
                            ilimitadas. Basicamente, no hay un límite del número
                            de fotografías que te entregaremos.
                        </p>
                    </div>
                    <div className='borderInfo--mobile w-[12%] md:w-[16%] mx-auto my-8'></div>
                    <div>
                        <h2 className='servicesColor3 py-4 text-center'>
                            EDITAS TODAS LAS FOTOGRAFÍAS?
                        </h2>
                        <p className='text-gray-500 text-sm py-4 text-justify'>
                            Se edita el 100% de las fotografías que se te
                            entregarán. La edición es de color e iluminación. No
                            incluye montaje de ningún tipo, corrección de
                            imperfecciones faciales o corporales.
                        </p>
                    </div>
                    <div className='borderInfo--mobile w-[12%] md:w-[16%] mx-auto my-8'></div>
                    <div>
                        <h2 className='servicesColor3 py-4 text-center'>
                            CÓMO RESERVO EL DÍA DE MI EVENTO?
                        </h2>
                        <p className='text-gray-500 text-sm py-4 text-justify'>
                            Primero, debemos de verificar que la fecha no haya
                            sido apartada ya. Luego, coordinamos una cita para
                            que podamos platicar acerca de las fotografías que
                            deseas. Allí mismo, solicitamos el 30% de anticipo y
                            procedemos a firmar el contrato de trabajo. Y
                            ¡Listo!.
                        </p>
                    </div>
                </div>
                <div className='md:w-[50%] tracking-widest	'>
                    <div>
                        <h2 className='servicesColor3 py-4 text-center'>
                            TIENE VENCIMIENTO LA GALERÍA WEB?
                        </h2>
                        <p className='text-gray-500 text-sm py-4 text-justify'>
                            Sí, tienes 15 días para visualizar, descargar o
                            compartir tus fotografías, posteriormente puedes
                            consultar por su existencia en nuestras galerías, y
                            si aún están disponibles con gusto te las
                            compartimos sin ningún costo.
                        </p>
                    </div>
                    <div className='borderInfo--mobile w-[12%] md:w-[16%] mx-auto my-8'></div>
                    <div>
                        <h2 className='servicesColor3 py-4 text-center'>
                            CUÁNDO SE CANCELA EL OTRO 70% RESTANTE
                        </h2>
                        <p className='text-gray-500 text-sm py-4 text-justify'>
                            El 70% restante se cancela días antes de que se
                            celebre el evento, se puede cancelar una semana
                            antes o un día antes.
                        </p>
                    </div>
                    <div className='borderInfo--mobile w-[12%] md:w-[16%] mx-auto my-8'></div>
                    <div>
                        <h2 className='servicesColor3 py-4 text-center'>
                            CUBRES VARIOS EVENTOS EN EL MISMO DÍA?
                        </h2>
                        <p className='text-gray-500 text-sm py-4 text-justify'>
                            Sí, tengo un equipo B 100% profesional y altamente
                            capacitado para cubrir tu evento si Wedding José
                            Daniel no está disponible.
                        </p>
                    </div>
                    <div className='borderInfo--mobile w-[12%] md:w-[16%] md:w-[20%] mx-auto my-8'></div>
                    <div>
                        <h2 className='servicesColor3 py-4 text-center'>
                            QUÉ DOCUMENTO ENTREGAS PARA DARLE VALIDEZ Y
                            CREDIBILIDAD AL SERVICIO?
                        </h2>
                        <p className='text-gray-500 text-sm py-4 text-justify'>
                            Entrego un contrato de trabajo firmado por mi y por
                            el cliente en el que afirmamos que estamos de
                            acuerdo con lo que recibiremos como y cuando.
                        </p>
                    </div>
                </div>
            </div>
            <div className='borderInfo--mobile h-[70px] w-[30%] mx-auto'></div>
            <h1 className='text-center my-14 md:my-24 servicesColor3 tracking-widest'>
                ¿EMPEZAMOS TU NUEVA AVENTURA?
            </h1>
            <div className='mx-auto my-12 mb-20 w-[40%] md:w-[15%]'>
                <Link href='/contacto' passHref>
                    <div className='hoverEffect bg-color-botton title_letter rounded-2xl text-gray-100 tracking-widest flex justify-center items-center p-4 text-xs'>
                        CONTACTAME
                    </div>
                </Link>
            </div>
        </div>
    );
};
