import { ErrorMessage, useField } from 'formik';

export const MySelect = ({ label, ...props }: any) => {
    const [field] = useField(props);

    return (
        <div className='contact-field'>
            {label && (
                <label
                    htmlFor={props.id || props.name}
                    className='ui_sans block text-[10px] font-medium uppercase tracking-[0.18em] text-[#2b2723]/70 lg:text-[11px]'
                >
                    {label}
                </label>
            )}

            <select
                {...field}
                {...props}
                className='contact-select display_serif mt-3 w-full cursor-pointer border-b border-[#2b2723]/25 bg-transparent pb-3 text-[17px] text-[#2b2723] outline-none transition-colors focus:border-[#2b2723] lg:text-[19px]'
            />

            <ErrorMessage
                name={props.name}
                component='p'
                className='ui_sans mt-2 text-[10px] uppercase tracking-[0.12em] text-[#a4442f]'
            />
        </div>
    );
};
