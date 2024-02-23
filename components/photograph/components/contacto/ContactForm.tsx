import { useRef, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2';

import { MyTextInput, MyRadio, MySelect } from './';
import { useAnimations } from '@/hooks';

const INITIAL_VALUE = {
    nombre: '',
    correo: '',
    telefono: '',
    fecha: '',
    lugar: '',
    cobertura: '',
    tipoServicio: '',
    tipoPaquete: '',
    saberDeMi: '',
    mensaje: '',
};

export const ContactForm = () => {
    const formRef: any = useRef();
    const [loading, setLoading] = useState(false);

    const { fadeOut } = useAnimations();

    const onSubmit = (value: any, { resetForm }: any) => {
        setLoading(true);

        emailjs
            .send(
                'service_5a6npas',
                'template_zdy2vrl',
                {
                    from_name: value.nombre,
                    to_name: 'José Daniel',
                    from_email: value.correo,
                    to_email: 'weddingjosedaniel@gmail.com',
                    // to_email: 'jhonatanlee942@gmail.com',
                    from_telefono: value.telefono,
                    from_cobertura: value.cobertura,
                    from_lugar: value.lugar,
                    from_fecha: value.fecha,
                    from_tipoServicio: value.tipoServicio,
                    from_tipoPaquete: value.tipoPaquete,
                    from_saberDeMi: value.saberDeMi,
                    message: value.mensaje,
                },
                'm6nNum5uVeI_RyvmX'
            )
            .then(
                () => {
                    setLoading(false);
                    Swal.fire({
                        title: 'Muchas gracias!',
                        text: 'Me pondré en contacto contigo lo antes posible.',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                    resetForm();
                },
                (error) => {
                    console.log(error);

                    setLoading(false);
                    Swal.fire({
                        title: 'Error!',
                        text: 'Algo salió mal.',
                        icon: 'error',
                        confirmButtonText: 'Cool',
                    });
                }
            );
    };

    // template_zdy2vrl
    // service_5a6npas
    //m6nNum5uVeI_RyvmX

    return (
        <div className='mt-[2rem]' data-aos={fadeOut}>
            <Formik
                initialValues={INITIAL_VALUE}
                onSubmit={onSubmit}
                validationSchema={Yup.object({
                    nombre: Yup.string()
                        .max(30, 'Este campo debe tener 30  caracteres o menos')
                        .required('Campo obligatorio'),
                    correo: Yup.string()
                        .email('Email no válido')
                        .required('Campo obligatorio'),
                    telefono: Yup.string().required('Campo obligatorio'),
                    fecha: Yup.date().required('Campo obligatorio'),
                    lugar: Yup.string()
                        .max(30, 'Este campo debe tener 30 caracteres o menos')
                        .required('Campo obligatorio'),
                    cobertura: Yup.string()
                        .max(30, 'Este campo debe tener 30 caracteres o menos')
                        .required('Campo obligatorio'),
                    tipoServicio: Yup.string().required('Campo obligatorio'),
                    tipoPaquete: Yup.string().required('Campo obligatorio'),
                    saberDeMi: Yup.string().required('Campo obligatorio'),
                    mensaje: Yup.string()
                        .max(
                            350,
                            'Este campo tiene un maximo de 350 caracteres'
                        )
                        .required('Campo obligatorio'),
                })}
            >
                {(formik) => (
                    <Form ref={formRef}>
                        <MyTextInput
                            label='Tu nombre'
                            name='nombre'
                            placeholder='¿Cuál es tu nombre?'
                            type='text'
                            className='h-[50px]'
                        />
                        <MyTextInput
                            label='Correo'
                            name='correo'
                            placeholder={'¿Cuál es tu correo?'}
                            type='email'
                            className='h-[50px]'
                        />
                        <MyTextInput
                            label='TELÉFONO'
                            name='telefono'
                            placeholder={'Número de teléfono'}
                            type='number'
                            className='h-[50px]'
                        />
                        <MyTextInput
                            label='COBERTURA'
                            name='cobertura'
                            placeholder={'Horas de cobertura (Eje: 5h )'}
                            type='text'
                            className='h-[50px]'
                        />
                        <MyTextInput
                            label='LUGAR'
                            name='lugar'
                            placeholder={'Lugar del evento'}
                            type='text'
                            className='h-[50px]'
                        />
                        <MyTextInput
                            label='FECHA'
                            name='fecha'
                            type='date'
                            className='h-[50px]'
                        />
                        <h3 className='text_color uppercase font-light text-[14px]'>
                            QUÉ TIPO DE SERVICIO ESTAS BUSCANDO?
                        </h3>
                        <MyRadio
                            name='tipoServicio'
                            label='Boda'
                            value='Boda'
                        />
                        <MyRadio
                            name='tipoServicio'
                            label='15 años'
                            value='XV'
                        />
                        <MyRadio
                            name='tipoServicio'
                            label='Save The Date'
                            value='SaveTheDate'
                        />
                        <h3 className='text_color uppercase font-light text-[14px] mt-[2rem]'>
                            QUÉ tipo de paquete estas buscando?
                        </h3>
                        <MyRadio
                            name='tipoPaquete'
                            label='Basico'
                            value='Básico'
                        />
                        <MyRadio
                            name='tipoPaquete'
                            label='Estándar'
                            value='Estándar'
                        />
                        <MyRadio
                            name='tipoPaquete'
                            label='Premium'
                            value='Premium'
                        />

                        <h3 className='text_color uppercase font-light text-[14px] mt-[2rem]'>
                            Como supiste de mi?
                        </h3>
                        <MySelect name='saberDeMi'>
                            <option value=''>Selecciona una opción</option>
                            <option value='RedesSociales'>
                                Redes sociales
                            </option>
                            <option value='Amigos'>Amigos</option>
                            <option value='Otros'>Otros</option>
                        </MySelect>
                        <label
                            htmlFor='mensaje'
                            className='text_color uppercase font-light text-[14px] '
                        >
                            mensaje&nbsp;&nbsp;
                            <span className='text-[10px]'>*</span>
                        </label>
                        <Field
                            name='mensaje'
                            as='textarea'
                            placeholder='¿Cómo puedo ayudarte hoy?'
                            className='block w-full outline-none p-[20px] bg-gray-100 h-[200px] focus:outline-none servicesColor title_letter mb-[2rem] resize-none	'
                        />

                        <button
                            className='hoverEffect text-gray-100 bg-color-botton px-[30px] py-[14px] uppercase title_letter rounded-2xl'
                            type='submit'
                            style={{
                                fontWeight: 200,
                            }}
                        >
                            Enviar
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
