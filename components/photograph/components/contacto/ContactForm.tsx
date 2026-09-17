import { useRef, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2';

import { MyTextInput, MyRadio, MySelect } from './';
import { contactForm } from '@/constant';

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

    const {
        eyebrow,
        serviceTitle,
        packageTitle,
        sourceTitle,
        submit,
        note,
    } = contactForm;

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

    return (
        <section className='w-full bg-[#f7f5f0]'>
            <div className='mx-auto w-[88%] max-w-[1080px] py-20 lg:py-28'>
                <p className='ui_sans text-center text-[11px] font-medium uppercase tracking-[0.18em] text-[#2b2723] lg:text-[12px]'>
                    {eyebrow}
                </p>

                <span className='mx-auto mt-8 block h-[1px] w-[64px] bg-[#2b2723]/25 lg:mt-10' />

                <Formik
                    initialValues={INITIAL_VALUE}
                    onSubmit={onSubmit}
                    validationSchema={Yup.object({
                        nombre: Yup.string()
                            .max(30, 'Este campo debe tener 30 caracteres o menos')
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
                            .max(350, 'Este campo tiene un maximo de 350 caracteres')
                            .required('Campo obligatorio'),
                    })}
                >
                    {() => (
                        <Form ref={formRef} className='mt-14 lg:mt-20'>
                            {/***** DATOS *****/}
                            <div className='grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:gap-x-20 lg:gap-y-12'>
                                <MyTextInput
                                    label='Tu nombre'
                                    name='nombre'
                                    placeholder='¿Cuál es tu nombre?'
                                    type='text'
                                />
                                <MyTextInput
                                    label='Correo'
                                    name='correo'
                                    placeholder='¿Cuál es tu correo?'
                                    type='email'
                                />
                                <MyTextInput
                                    label='Teléfono'
                                    name='telefono'
                                    placeholder='Número de teléfono'
                                    type='number'
                                />
                                <MyTextInput
                                    label='Cobertura'
                                    name='cobertura'
                                    placeholder='Horas de cobertura (Eje: 5h)'
                                    type='text'
                                />
                                <MyTextInput
                                    label='Lugar'
                                    name='lugar'
                                    placeholder='Lugar del evento'
                                    type='text'
                                />
                                <MyTextInput
                                    label='Fecha'
                                    name='fecha'
                                    type='date'
                                />
                            </div>

                            {/***** SELECCIONES *****/}
                            <div className='mt-16 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:mt-20 lg:gap-x-20'>
                                <fieldset>
                                    <legend className='display_serif text-[20px] text-[#2b2723] lg:text-[23px]'>
                                        {serviceTitle}
                                    </legend>

                                    <div className='mt-5'>
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
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <legend className='display_serif text-[20px] text-[#2b2723] lg:text-[23px]'>
                                        {packageTitle}
                                    </legend>

                                    <div className='mt-5'>
                                        <MyRadio
                                            name='tipoPaquete'
                                            label='Básico'
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
                                    </div>
                                </fieldset>
                            </div>

                            {/***** ORIGEN *****/}
                            <div className='mt-16 max-w-[520px] lg:mt-20'>
                                <MySelect name='saberDeMi' label={sourceTitle}>
                                    <option value=''>
                                        Selecciona una opción
                                    </option>
                                    <option value='RedesSociales'>
                                        Redes sociales
                                    </option>
                                    <option value='Amigos'>Amigos</option>
                                    <option value='Otros'>Otros</option>
                                </MySelect>
                            </div>

                            {/***** MENSAJE *****/}
                            <div className='mt-16 lg:mt-20'>
                                <label
                                    htmlFor='mensaje'
                                    className='ui_sans block text-[10px] font-medium uppercase tracking-[0.18em] text-[#2b2723]/70 lg:text-[11px]'
                                >
                                    Mensaje
                                    <span className='ml-1 align-super text-[8px]'>
                                        *
                                    </span>
                                </label>

                                <Field
                                    id='mensaje'
                                    name='mensaje'
                                    as='textarea'
                                    placeholder='¿Cómo puedo ayudarte hoy?'
                                    className='display_serif mt-3 block h-[170px] w-full resize-none border-b border-[#2b2723]/25 bg-transparent pb-3 text-[17px] leading-[1.6] text-[#2b2723] outline-none transition-colors placeholder:text-[#2b2723]/35 focus:border-[#2b2723] lg:text-[19px]'
                                />

                                <ErrorMessage
                                    name='mensaje'
                                    component='p'
                                    className='ui_sans mt-2 text-[10px] uppercase tracking-[0.12em] text-[#a4442f]'
                                />
                            </div>

                            {/***** ENVIAR *****/}
                            <div className='mt-16 flex flex-col items-center lg:mt-20'>
                                <button
                                    type='submit'
                                    disabled={loading}
                                    className='contact-submit ui_sans px-14 py-4 text-[11px] font-medium uppercase tracking-[0.22em] lg:text-[12px]'
                                >
                                    {loading ? 'ENVIANDO…' : submit}
                                </button>

                                <p className='ui_sans mt-6 text-center text-[11px] font-light tracking-[0.06em] text-[#3a3530]/70 lg:text-[12px]'>
                                    {note}
                                </p>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
};
