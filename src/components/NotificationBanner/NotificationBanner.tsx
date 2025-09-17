import { useEffect, useRef } from 'react';
import AbstractNotificationBanner from '../../common/AbstractNotificationBanner';
// @ts-ignore
import DSNotificationBanner from '@scottish-government/design-system/src/components/notification-banner/notification-banner';

const NotificationBanner = ({
    children,
    className,
    hasColourIcon,
    hasIcon,
    hasInverseIcon,
    isDismissable,
    title,
    ...props
}: SGDS.Common.AbstractNotificationBanner) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSNotificationBanner(ref.current).init();
        }
    }, [ref]);

    return (
        <AbstractNotificationBanner
            className={[
                'ds_reversed',
                className
            ].join(' ')}
            isDismissable={isDismissable}
            icon={hasIcon ? "PriorityHigh" : undefined}
            hasColourIcon={hasColourIcon}
            hasInverseIcon={hasInverseIcon}
            ref={ref}
            title="Information"
            {...props}
        >
            {children}
        </AbstractNotificationBanner>
    );
};

NotificationBanner.displayName = 'NotificationBanner';
NotificationBanner.Buttons = AbstractNotificationBanner.Buttons;

export default NotificationBanner;
