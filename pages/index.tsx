import { useContext } from 'react';
import { Layout } from '@/components/layout/Layout';
import { PhotographyContext } from '@/components/photograph/context';

import {
    HomeInfo,
    HomeServices,
} from '@/components/photograph/components/home';

export default function HomePage() {
    const { openMenu } = useContext(PhotographyContext);
    return (
        <Layout title='Wedding Jose Daniel'>
            <div className={`${openMenu ? 'hidden' : ''}`}>
                <HomeInfo />
                <HomeServices />
            </div>
        </Layout>
    );
}
