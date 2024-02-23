import { ErrorMessage, useField } from 'formik';

export const MyRadio = ({ label, ...props }: any) => {
    const [field] = useField({ ...props, type: 'radio' });
    return (
        <>
            <label className='text_color title_letter'>
                <input
                    type='radio'
                    {...field}
                    {...props}
                    className='mb-[16px]'
                    required
                />
                &nbsp; &nbsp;
                {label}
            </label>
            <ErrorMessage
                name={props.name}
                component='h2'
                className='text-red-700'
            />
            <br />
        </>
    );
};
