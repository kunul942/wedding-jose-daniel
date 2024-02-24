import { Layout } from '@/components/layout/Layout';
import { NextPage } from 'next';

export default function GabyDenis<NextPage>() {
    return (
        <>
            <Layout title='Wedding Jose Daniel - Videos'>
                <div className='hidden md:block my-12 xl:my-18 2xl:my-2'>
                    <iframe
                        width='100%'
                        height='800'
                        src='https://www.youtube.com/embed/CuC8k6X2m24?si=RflrUur1ZlECrpCk'
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    ></iframe>
                </div>
                <div className='md:hidden my-2'>
                    <iframe
                        width='100%'
                        height='500'
                        src='https://www.youtube.com/embed/CuC8k6X2m24?si=RflrUur1ZlECrpCk'
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    ></iframe>
                </div>
            </Layout>
        </>
    );
}