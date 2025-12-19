
import { useEffect, useRef } from 'react';
import AbstractNotificationBanner from '../../common/AbstractNotificationBanner';
// @ts-expect-error no types from core SGDS
import DSCookieBanner from '@scottish-government/design-system/src/components/cookie-notification/cookie-notification.js';
import { AbstractNotificationBannerProps } from '../../common/AbstractNotificationBanner/types';

const CookieBanner = ({
    children,
    className,
    title = 'Information',
    ...props
}: AbstractNotificationBannerProps) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSCookieBanner(ref.current).init();
        }
    }, [ref]);

    return (
        <>
            <AbstractNotificationBanner
                className={[
                    'ds_notification--large',
                    'ds_notification--cookie',
                    'js-initial-cookie-content',
                    className
                ].join(' ')}
                data-module="ds-cookie-notification"
                ref={ref}
                title={title}
                {...props}
            >
                {children}
            </AbstractNotificationBanner>
        </>
    );
}

CookieBanner.displayName = 'CookieBanner';
CookieBanner.Buttons = AbstractNotificationBanner.Buttons;
CookieBanner.Buttons.displayName = 'CookieBanner.Buttons';

export default CookieBanner;
