import { useContext } from 'react';
import { NextPage } from 'next';
import { PhotographyContext } from '@/components/photograph/context';
import { Layout } from '@/components/layout/Layout';
import {
    AboutBody,
    AboutHeader,
    YourStory,
} from '@/components/photograph/components/about';

export default function AboutPage() {
    const { openMenu } = useContext(PhotographyContext);
    return (
        <Layout title='Acerca de mi'>
            <div className={`${openMenu ? 'hidden' : ''}`}>
                <AboutHeader />
                <AboutBody />
                <YourStory />
            </div>
        </Layout>
    );
}
