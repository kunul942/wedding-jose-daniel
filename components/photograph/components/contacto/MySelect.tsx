import { ErrorMessage, useField } from 'formik';

export const MySelect = ({ label, ...props }: any) => {
    const [field] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select
                {...field}
                {...props}
                className='p-[20px] bg-gray-100 focus:outline-none servicesColor title_letter w-full mb-[2rem] text-[16px]'
            />
            <ErrorMessage
                name={props.name}
                component='h2'
                className='text-red-700'
            />
        </>
    );
};
