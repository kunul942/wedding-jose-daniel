import { Footer, Navbar } from '../UI/';
import { LayoutHeader } from './LayoutHeader';

interface Props {
    children: JSX.Element | JSX.Element[];
    title?: string;
}

export const Layout = ({ title = 'Wedding Jose Daniel', children }: Props) => {
    return (
        <div>
            <LayoutHeader title={title} />

            <Navbar />

            <div>{children}</div>
            <Footer />
        </div>
    );
};
