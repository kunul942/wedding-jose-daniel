import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export const useAnimations = () => {
    useEffect(() => {
        AOS.init({ duration: 2000, once: true });

        /**
         * AOS measures every element once, so anything below a late-loading
         * image ends up with the wrong trigger point and can stay invisible.
         * Re-measure after the page (and its images) finish loading.
         */
        const refresh = () => AOS.refresh();

        window.addEventListener('load', refresh);
        window.addEventListener('resize', refresh);

        const timeout = setTimeout(refresh, 1200);

        return () => {
            window.removeEventListener('load', refresh);
            window.removeEventListener('resize', refresh);
            clearTimeout(timeout);
        };
    }, []);

    return {
        fadeOut: 'fade-out',
    };
};
