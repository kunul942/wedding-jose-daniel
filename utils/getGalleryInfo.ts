import { galerias, peopleGalleryName } from '@/constant';

export const getGalleryInfo = (slug: string) => {
    const test = {
        res: galerias.find((el) => el.slug === slug),
    };
    console.log('res: aca en getGallery info', { slug, test });

    return galerias.find((el) => el.slug === slug);
};

export const getSesionesInfo = (name: string) => {
    return peopleGalleryName.find((el) => el.slug === name);
};
