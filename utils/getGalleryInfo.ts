import { galerias, peopleGalleryName } from '@/constant';

export const getGalleryInfo = (slug: string) => {
    return galerias.find((el) => el.slug === slug);
};

export const getSesionesInfo = (name: string) => {
    return peopleGalleryName.find((el) => el.slug === name);
};
