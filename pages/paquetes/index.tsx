import { useContext } from 'react';
import { Layout } from '@/components/layout/Layout';
import { PhotographyContext } from '@/components/photograph/context';

import {
    PaquetesImage,
    PaquetesServices,
    PreguntasFrecuents,
} from '@/components/photograph/components';

export default function PaquetesPage() {
    const { openMenu } = useContext(PhotographyContext);

    return (
        <Layout title='Wedding Jose Daniel'>
            <div className={`${openMenu ? 'hidden' : ''}`}>
                <PaquetesImage />
                <PaquetesServices />
                <PreguntasFrecuents />
            </div>
        </Layout>
    );
}
