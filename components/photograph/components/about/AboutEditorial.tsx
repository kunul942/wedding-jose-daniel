import { useAnimations } from '@/hooks';
import { aboutEditorial } from '@/constant';

export const AboutEditorial = () => {
    const { fadeOut } = useAnimations();
    const { title, columns } = aboutEditorial;

    return (
        <section className='w-full bg-white'>
            <div
                className='mx-auto w-[88%] max-w-[1080px] py-20 lg:py-28'
                data-aos={undefined}
            >
                <h2 className='display_serif mx-auto max-w-[720px] text-center text-[8.5vw] leading-[1.15] text-[#211d1a] sm:text-[6vw] lg:text-[3.3vw] 2xl:text-[46px]'>
                    {title.map((line) => (
                        <span key={line} className='block'>
                            {line}
                        </span>
                    ))}
                </h2>

                <div className='mx-auto mt-12 grid max-w-[820px] gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-14'>
                    {columns.map((paragraphs, columnIndex) => (
                        <div key={columnIndex}>
                            {paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className={`ui_sans text-[13px] font-light leading-[1.85] text-[#3a3530] lg:text-[13.5px] ${
                                        index === 0 ? '' : 'mt-6'
                                    }`}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
