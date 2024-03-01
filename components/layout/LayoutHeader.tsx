import { homeMainImage } from '@/assets';
import Head from 'next/head';

interface Props {
    title: string;
}

export const LayoutHeader = ({ title }: Props) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description'></meta>
            <meta name='og:title' content={title} />
            <meta
                name='description'
                content={`¡Hola! Soy José Daniel. Si me permites seré tu fotográfo. Comencé en este mundo de las bodas cuando me casé. Compré mi camara para que alguien me hiciera fotos con ella, me regalaron un taller al comprarla y me di cuenta de que no era nada fácil, pero también de que hacer fotos era mi pasión. Así que decidí dedicar horas para aprender, hasta que finalmente decidí ser feliz haciendo lo que amo y gracias a personas como tu que han confiado en mi trabajo, hoy estoy aquí documentando el día más feliz de los enamorados.`}
            />
            <meta name='author' content='Wedding Jose Daniel' />
            <meta name='keywords' content='Wedding Jose Daniel' />
            <link rel='canonical' href='https://www.weddingjosedaniel.com/' />
            <link rel='icon' href={homeMainImage.src} />
            <link rel='apple-touch-icon' href={homeMainImage.src} />

            <meta property='og:type' content='website' />
            <meta
                property='og:url'
                content='https://www.weddingjosedaniel.com/'
            />
            <meta property='og:title' content='Wedding Jose Daniel' />
            <meta
                property='og:description'
                content={`¡Hola! Soy José Daniel. Si me permites seré tu fotográfo. Comencé en este mundo de las bodas cuando me casé. Compré mi camara para que alguien me hiciera fotos con ella, me regalaron un taller al comprarla y me di cuenta de que no era nada fácil, pero también de que hacer fotos era mi pasión. Así que decidí dedicar horas para aprender, hasta que finalmente decidí ser feliz haciendo lo que amo y gracias a personas como tu que han confiado en mi trabajo, hoy estoy aquí documentando el día más feliz de los enamorados.`}
            />
            <meta property='og:image' content={homeMainImage.src} />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='@weddingjosedaniel' />
            <meta name='twitter:creator' content='@weddingjosedaniel' />
            <meta name='twitter:title' content='Wedding Jose Daniel' />
            <meta
                name='twitter:description'
                content={`¡Hola! Soy José Daniel. Si me permites seré tu fotográfo. Comencé en este mundo de las bodas cuando me casé. Compré mi camara para que alguien me hiciera fotos con ella, me regalaron un taller al comprarla y me di cuenta de que no era nada fácil, pero también de que hacer fotos era mi pasión. Así que decidí dedicar horas para aprender, hasta que finalmente decidí ser feliz haciendo lo que amo y gracias a personas como tu que han confiado en mi trabajo, hoy estoy aquí documentando el día más feliz de los enamorados.`}
            />
            <meta name='twitter:image' content={homeMainImage.src} />
        </Head>
    );
};
