import { useContext } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { PeopleGallery } from '@/components/photograph/components/peopleGallery';

import { Layout } from '@/components/layout/Layout';
import { PhotographyContext } from '@/components/photograph/context';
import { peopleGalleryName } from '@/constant';
import { PeopleGalleries } from '@/interfaces';
import { getGalleryInfo, getSesionesInfo } from '@/utils';

interface Props {
    peopleGallery: PeopleGalleries;
}

export default function PeopleImagesPages({ peopleGallery }: Props) {
    const { openMenu } = useContext(PhotographyContext);

    return (
        <Layout title={'Wedding Jose Daniel Galerias'}>
            <div className={`${openMenu ? 'hidden' : ''}`}>
                <PeopleGallery peopleGallery={peopleGallery} />
            </div>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: peopleGalleryName.map(({ slug }) => ({
            params: {
                name: slug,
            },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = (ctx) => {
    const { name } = ctx.params as { name: string };

    const peopleGallery = getSesionesInfo(name);

    return {
        props: {
            peopleGallery,
        },
    };
};
