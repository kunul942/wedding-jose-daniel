import { ErrorMessage, useField } from 'formik';

export const MyTextInput = ({ label, className = '', ...props }: any) => {
    const [field, metadata] = useField(props);
    return (
        <>
            <br />
            <ErrorMessage
                name={props.name}
                component='h2'
                className='text-red-700'
            />
            <label
                htmlFor={props.id || props.name}
                className='text_color uppercase font-light text-[14px] '
            >
                {label}&nbsp;&nbsp;
                <span className='text-[10px]'>*</span>
            </label>
            <br />
            <input
                {...field}
                type='text'
                {...props}
                className={`${className} p-[20px] bg-gray-100 h-[50px] focus:outline-none servicesColor title_letter w-full mb-[2rem]`}
                required
            />
        </>
    );
};
