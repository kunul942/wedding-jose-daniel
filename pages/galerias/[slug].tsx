import { useContext } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { PhotographyContext } from '@/components/photograph/context';

import { GalleryItem, GallerySection } from '@/interfaces';
import { galerias } from '@/constant';
import { getGalleryInfo } from '@/utils';
import {
    GalleryCarousel,
    GalleryFeatured,
    GalleryHero,
    GalleryIntro,
} from '@/components/photograph/components/gallery';
import { Layout } from '@/components/layout/Layout';

interface Props {
    gallery: GalleryItem;
}

export default function GaleriasPage<NextPage>({ gallery }: Props) {
    const { openMenu } = useContext(PhotographyContext);

    console.log('res: here?', gallery);
    return (
        <Layout title={'Wedding Jose Daniel Galerias'} navTone='cream'>
            <div className={`${openMenu ? 'hidden' : ''}`}>
                <GalleryHero />
                <GalleryIntro />
                <GalleryFeatured boda={gallery.boda} />
            </div>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: galerias.map(({ slug }) => ({
            params: {
                slug,
            },
        })),
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = (ctx) => {
    const { slug } = ctx.params as { slug: string };

    const gallery = getGalleryInfo(slug);

    if (!gallery) {
        return { notFound: true };
    }

    return {
        props: {
            gallery,
        },
    };
};
