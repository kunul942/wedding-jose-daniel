import { useContext } from 'react';
import { Layout } from '@/components/layout/Layout';
import { PhotographyContext } from '@/components/photograph/context';
import { ContactImage } from '../../components/photograph/components/contacto/ContactImage';
import { ContactForm, ContactHeader } from '@/components/photograph/components';

export default function ContactPage() {
    const { openMenu } = useContext(PhotographyContext);

    return (
        <Layout title='Wedding Jose Daniel'>
            <div className={`${openMenu ? 'hidden' : ''}`}>
                <ContactImage />
                <div className='w-[85%] md:w-[60%] xl:w-[40%] mx-auto'>
                    <ContactHeader />
                    <ContactForm />
                </div>
            </div>
        </Layout>
    );
}
