import { ErrorMessage, useField } from 'formik';

export const MyTextInput = ({ label, className = '', ...props }: any) => {
    const [field] = useField(props);

    return (
        <div className={`contact-field ${className}`}>
            <label
                htmlFor={props.id || props.name}
                className='ui_sans block text-[10px] font-medium uppercase tracking-[0.18em] text-[#2b2723]/70 lg:text-[11px]'
            >
                {label}
                <span className='ml-1 align-super text-[8px]'>*</span>
            </label>

            <input
                {...field}
                type='text'
                {...props}
                className='display_serif mt-3 w-full border-b border-[#2b2723]/25 bg-transparent pb-3 text-[17px] text-[#2b2723] outline-none transition-colors placeholder:text-[#2b2723]/35 focus:border-[#2b2723] lg:text-[19px]'
                required
            />

            <ErrorMessage
                name={props.name}
                component='p'
                className='ui_sans mt-2 text-[10px] uppercase tracking-[0.12em] text-[#a4442f]'
            />
        </div>
    );
};
