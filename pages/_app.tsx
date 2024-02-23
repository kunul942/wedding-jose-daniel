import { PhotographyProvider } from '@/components/photograph/context';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PhotographyProvider>
            <Component {...pageProps} />;
        </PhotographyProvider>
    );
}
