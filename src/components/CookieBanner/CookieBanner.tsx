
import { useEffect, useRef } from 'react';
import AbstractNotificationBanner from '../../common/AbstractNotificationBanner';
import DSCookieBanner from '@scottish-government/design-system/src/components/cookie-notification/cookie-notification.js';
import { AbstractNotificationBannerProps } from '../../common/AbstractNotificationBanner/types';
import clsx from 'clsx';

const CookieBanner = ({
    children,
    className,
    title = 'Information',
    ...props
}: AbstractNotificationBannerProps) => {
    const ref = useRef(null);

    useEffect(() => {
        /* istanbul ignore else */
        if (ref.current) {
            new DSCookieBanner(ref.current).init();
        }
    }, [ref]);

    return (
        <>
            <AbstractNotificationBanner
                className={clsx([
                    'ds_notification--large',
                    'ds_notification--cookie',
                    'js-initial-cookie-content',
                    className
                ])}
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
