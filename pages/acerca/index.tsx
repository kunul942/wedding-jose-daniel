import { useContext } from 'react';
import { PhotographyContext } from '@/components/photograph/context';
import { Layout } from '@/components/layout/Layout';
import {
    AboutBehind,
    AboutBody,
    AboutEditorial,
    AboutGalleries,
    AboutHero,
    AboutMoodboard,
    AboutPrimer,
    YourStory,
} from '@/components/photograph/components/about';

export default function AboutPage() {
    const { openMenu } = useContext(PhotographyContext);
    return (
        <Layout title='Acerca de mi'>
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
