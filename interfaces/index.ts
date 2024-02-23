import { StaticImageData } from 'next/image';

export interface GallerySection {
    slug: string;
    imagePortada: StaticImageData;
    title: string;
    subtitle: string;
}

export interface GalleryItem {
    slug: string;
    mainImage: StaticImageData;
    title: string;
    carousel: {
        id: string;
        img: StaticImageData;
    };
    sectionTitle: string;
    boda: GallerySection[];
}

interface peopleGalleriesImage {
    img: StaticImageData;
    id: string;
}

export interface PeopleGalleries {
    slug: string;
    mainImage: StaticImageData;
    images: peopleGalleriesImage[];
    name: string;
}
