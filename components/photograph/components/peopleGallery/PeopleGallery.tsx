import { PeopleGalleries } from '@/interfaces';

import { PeopleGalleryHero } from './PeopleGalleryHero';
import { PeopleGalleryGrid } from './PeopleGalleryGrid';

interface Props {
    peopleGallery: PeopleGalleries;
}

export const PeopleGallery = ({ peopleGallery }: Props) => {
    return (
        <>
            <PeopleGalleryHero
                image={peopleGallery.mainImage}
                name={peopleGallery.name}
            />

            <PeopleGalleryGrid images={peopleGallery.images} />
        </>
    );
};
