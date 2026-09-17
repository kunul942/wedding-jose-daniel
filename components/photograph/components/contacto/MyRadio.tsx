import { useField } from 'formik';

export const MyRadio = ({ label, ...props }: any) => {
    const [field] = useField({ ...props, type: 'radio' });

    return (
        <label className='flex cursor-pointer items-center gap-3 py-2'>
            <input type='radio' {...field} {...props} className='peer sr-only' />

            <span className='relative h-[15px] w-[15px] shrink-0 rounded-full border border-[#2b2723]/35 transition-colors after:absolute after:inset-[3px] after:rounded-full after:transition-colors peer-checked:border-[#2b2723] peer-checked:after:bg-[#2b2723]' />

            <span className='ui_sans text-[13px] font-light tracking-[0.04em] text-[#2b2723] lg:text-[14px]'>
                {label}
            </span>
        </label>
    );
};
