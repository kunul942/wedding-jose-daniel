import { FooterFeed, FooterMain, Navbar } from '../UI/';
import { LayoutHeader } from './LayoutHeader';

interface Props {
    children: JSX.Element | JSX.Element[];
    title?: string;
    /** Floats the navbar over the page content (used by the home hero). */
    overlayNav?: boolean;
    /** Background of the solid navbar. `cream` matches the editorial heroes. */
    navTone?: 'white' | 'cream';
}

export const Layout = ({
    title = 'Wedding Jose Daniel',
    overlayNav = false,
    navTone = 'white',
    children,
}: Props) => {
    return (
        <div>
            <LayoutHeader title={title} />

            <Navbar overlay={overlayNav} tone={navTone} />

            <div>{children}</div>

            <FooterFeed />
            <FooterMain />
        </div>
    );
};
