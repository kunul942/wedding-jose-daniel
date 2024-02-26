import { useContext } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { PhotographyContext } from '@/components/photograph/context';

import { GalleryItem, GallerySection } from '@/interfaces';
import { galerias } from '@/constant';
import { getGalleryInfo } from '@/utils';
import {
    GalleryCarousel,
    GalleryImage,
    GalleryCards,
} from '@/components/photograph/components/gallery';
import { Layout } from '@/components/layout/Layout';

interface Props {
    gallery: GalleryItem;
}

export default function GaleriasPage<NextPage>({ gallery }: Props) {
    const { openMenu } = useContext(PhotographyContext);
    return (
        <Layout title={'Wedding Jose Daniel Galerias'}>
            <div className={`${openMenu ? 'hidden' : ''}`}>
                <GalleryImage
                    mainImage={gallery.mainImage}
                    title={gallery.title}
                />
                <GalleryCarousel carousel={gallery.carousel} />
                <GalleryCards boda={gallery.boda} />
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

    return {
        props: {
            gallery,
        },
    };
};
