import { useContext } from 'react';

import { Layout } from '@/components/layout/Layout';
import { PhotographyContext } from '@/components/photograph/context';
import {
    ContactForm,
    ContactHeader,
    ContactHero,
} from '@/components/photograph/components/contacto';

export default function ContactPage() {
    const { openMenu } = useContext(PhotographyContext);

    return (
        <Layout title='Book Jose Daniel | Wedding' overlayNav>
            <div className={`${openMenu ? 'hidden' : ''}`}>
                <ContactHero />
                <ContactHeader />
                <ContactForm />
            </div>
        </Layout>
    );
}
