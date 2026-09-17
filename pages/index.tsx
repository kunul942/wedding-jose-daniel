import { useContext } from 'react';
import { Layout } from '@/components/layout/Layout';
import { PhotographyContext } from '@/components/photograph/context';

import {
    HomeAbout,
    HomeExperience,
    HomeHero,
    HomeJDExperience,
    HomeRealWeddings,
    HomeSocialPackage,
} from '@/components/photograph/components/home';

export default function HomePage() {
    const { openMenu } = useContext(PhotographyContext);
    return (
        <Layout title='Wedding Jose Daniel' overlayNav>
            <div className={`${openMenu ? 'hidden' : ''}`}>
                <HomeHero />
                <HomeExperience />
                <HomeAbout />
                <HomeJDExperience />
                <HomeRealWeddings />
                <HomeSocialPackage />
            </div>
        </Layout>
    );
}
