import { NotificationTagProps } from "./types";
import clsx from 'clsx';

const NotificationTag = ({
    children,
    className,
    description,
    isHidden,
    label,
    ...props
}: NotificationTagProps) => {
    return (
        <span className="ds_notification-tag__wrapper">
            {children}
            <span
                aria-hidden={isHidden ? "true" : undefined}
                className={clsx([
                    'ds_notification-tag',
                    !label && 'ds_notification-tag--dot',
                    className
                ])}
                {...props}
            >
                {label} {description && <span className="visually-hidden">{description}</span>}
            </span>
        </span>
    )
};

NotificationTag.displayName = 'NotificationTag';

export default NotificationTag;
