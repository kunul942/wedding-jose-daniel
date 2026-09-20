import { useContext } from 'react';
import { PhotographyContext } from '@/components/photograph/context';
import { Layout } from '@/components/layout/Layout';
import {
    AboutBehind,
    AboutEditorial,
    AboutGalleries,
    AboutHero,
    AboutMoodboard,
    AboutPrimer,
} from '@/components/photograph/components/about';

export default function AboutPage() {
    const { openMenu } = useContext(PhotographyContext);
    return (
        <Layout title='About Jose Daniel | Wedding'>
            <div className={`${openMenu ? 'hidden' : ''}`}>
                <AboutHero />
                <AboutEditorial />
                <AboutBehind />
                <AboutPrimer />
                <AboutMoodboard />
                <AboutGalleries />
            </div>
        </Layout>
    );
}
