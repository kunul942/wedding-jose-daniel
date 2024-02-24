import { Layout } from '@/components/layout/Layout';

export default function TimEstefaniaVideo() {
    return (
        <>
            <Layout title={'Wedding Jose Daniel - Videos'}>
                <div className='hidden md:block my-12 xl:my-18 2xl:my-2'>
                    <iframe
                        width='100%'
                        height='800'
                        src='https://www.youtube.com/embed/fPFhijhmvg4?si=JrbI-t4864FQNH3N'
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    ></iframe>
                </div>
                <div className='md:hidden my-2'>
                    <iframe
                        width='100%'
                        height='500'
                        src='https://www.youtube.com/embed/fPFhijhmvg4?si=JrbI-t4864FQNH3N'
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    ></iframe>
                </div>
            </Layout>
            -
        </>
    );
}
