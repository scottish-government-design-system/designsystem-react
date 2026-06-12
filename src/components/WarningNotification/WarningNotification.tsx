import { useEffect, useRef } from 'react';
import AbstractNotificationMessage from '../../common/AbstractNotificationMessage';
import DSNotificationMessage from '@scottish-government/design-system/src/components/notification-message/notification-message';
import { AbstractNotificationMessageProps } from '../../common/AbstractNotificationMessage/types';
import clsx from 'clsx';

const WarningNotification = ({
    ariaLive,
    children,
    className,
    headingLevel = 'h3',
    isDismissable,
    title,
    ...props
}: AbstractNotificationMessageProps) => {
    const ref = useRef(null);

    useEffect(() => {
        /* istanbul ignore else */
        if (ref.current) {
            new DSNotificationMessage(ref.current).init();
        }
    }, [ref]);
    
    return (
        <AbstractNotificationMessage
            ariaLive={ariaLive}
            className={clsx([
                'ds_notification-message--warning',
                className
            ])}
            headingLevel={headingLevel}
            icon="Warning"
            isDismissable={isDismissable}
            ref={ref}
            title={title}
            {...props}
        >
            {children}
        </AbstractNotificationMessage>
    );
};

WarningNotification.displayName = 'WarningNotification';

export default WarningNotification;
