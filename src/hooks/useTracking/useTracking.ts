import { useEffect } from 'react';

// @ts-expect-error no types from core SGDS
import DSTracking from '@scottish-government/design-system/src/base/tools/tracking/tracking';

export default function () {
    useEffect(() => {
        const observer = new MutationObserver(() => {
            DSTracking.init();
        });
        DSTracking.init();

        observer.observe(document.body, { childList: true, subtree: true, characterData: true });

        return () => {
            observer.disconnect();
        }
    }, []);
}
