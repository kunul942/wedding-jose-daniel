import { useAnimations } from '@/hooks';
import { galleryIntro } from '@/constant';

export const GalleryIntro = () => {
    const { fadeOut } = useAnimations();
    const { eyebrow, statement, text } = galleryIntro;

    return (
        <section className='w-full bg-[#eae7dd]'>
            <div
                className='mx-auto w-[90%] max-w-[1400px] py-20 text-center lg:py-28'
                data-aos={fadeOut}
            >
                <p className='ui_sans text-[11px] font-medium uppercase tracking-[0.16em] text-[#2b2723] lg:text-[13px]'>
                    {eyebrow}
                </p>

                <h2 className='display_serif mx-auto mt-8 max-w-[1250px] text-[7vw] leading-[1.16] text-[#2b2723] sm:text-[5vw] lg:mt-10 lg:text-[3.2vw]'>
                    {statement}
                </h2>

                <p className='ui_sans mx-auto mt-8 max-w-[720px] text-[13px] font-light leading-[1.7] text-[#3a3530] lg:mt-10 lg:text-[15px]'>
                    {text}
                </p>
            </div>
        </section>
    );
};
