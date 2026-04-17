import { useEffect, useRef } from 'react';
import AbstractNotificationBanner from '../../common/AbstractNotificationBanner';
import DSNotificationBanner from '@scottish-government/design-system/src/components/notification-banner/notification-banner';
import { AbstractNotificationBannerProps } from '../../common/AbstractNotificationBanner/types';
import clsx from 'clsx';

const NotificationBanner = ({
    children,
    className,
    hasColourIcon,
    hasIcon,
    hasInverseIcon,
    isDismissable,
    title = 'Information',
    ...props
}: AbstractNotificationBannerProps) => {
    const ref = useRef(null);

    useEffect(() => {
        /* istanbul ignore else */
        if (ref.current) {
            new DSNotificationBanner(ref.current).init();
        }
    }, [ref]);

    return (
        <AbstractNotificationBanner
            className={clsx([
                'ds_reversed',
                className
            ])}
            isDismissable={isDismissable}
            icon={hasIcon ? "PriorityHigh" : undefined}
            hasColourIcon={hasColourIcon}
            hasInverseIcon={hasInverseIcon}
            ref={ref}
            title={title}
            {...props}
        >
            {children}
        </AbstractNotificationBanner>
    );
};

NotificationBanner.displayName = 'NotificationBanner';
NotificationBanner.Buttons = AbstractNotificationBanner.Buttons;

export default NotificationBanner;
