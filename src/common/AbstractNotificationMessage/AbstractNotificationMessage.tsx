import Icon from '../Icon';
import ScreenReaderText from '../ScreenReaderText';
import WrapperTag from '../WrapperTag';
import { AbstractNotificationMessageProps } from './types';
import clsx from 'clsx';

const AbstractNotificationMessage = ({
    ariaLive = 'polite',
    children,
    className,
    headingLevel = 'h3',
    icon,
    isDismissable,
    title,
    ...props
}: AbstractNotificationMessageProps) => {

    return (
        <div
            aria-live={ariaLive}
            className={clsx([
                'ds_notification-message',
                className
            ])}
            data-module="ds-notification-message"
            {...props}
        >
            {icon &&
                <Icon icon={icon} className="ds_notification-message__icon" iconSize="24" />
            }
            <WrapperTag
                className="ds_notification-message__title"
                tagName={headingLevel}
            >
                {title}
            </WrapperTag>

            {children &&
                <div className="ds_notification-message__body">
                    {children}
                </div>
            }

            {isDismissable &&
                <button type="button" className="ds_notification-message__close  js-close-notification-message">
                    <ScreenReaderText>Close this notification</ScreenReaderText>
                    <Icon isFilled icon="Close" aria-hidden="true" />
                </button>
            }
        </div>
    );
};

AbstractNotificationMessage.displayName = 'AbstractNotificationMessage';

export default AbstractNotificationMessage;
