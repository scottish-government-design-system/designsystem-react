import { Children } from 'react';
import Icon from '../Icon';
import ScreenReaderText from '../ScreenReaderText';
import { AbstractNotificationBannerProps, AbstractNotificationBannerButtonsProps } from './types';

const Buttons = ({
    children
}: AbstractNotificationBannerButtonsProps) => {
    return (<div className="ds_button-group">{children}</div>);
};

const AbstractNotificationBanner = ({
    children,
    className,
    hasColourIcon,
    hasInverseIcon,
    icon,
    isDismissable,
    title = 'Information',
    ...props
}: AbstractNotificationBannerProps) => {
    const content: React.ReactElement[] = [];
    let buttons;

    Children.forEach(children, (child) => {
        const thisChild = child as React.ReactElement<HTMLAnchorElement>;
        if (thisChild && thisChild.type === Buttons) {
            buttons = thisChild;
        } else {
            content.push(thisChild);
        }
    });

    return (
        <div
            className={[
                'ds_notification',
                className
            ].join(' ')}
            data-module="ds-notification"
            {...props}
        >
            <div className="ds_wrapper">
                <div className={
                    [
                        'ds_notification__content',
                        isDismissable && 'ds_notification__content--has-close'
                    ].join(' ')}
                >
                    <h2 className="visually-hidden">{title}</h2>

                    {icon &&
                        <span
                        className={[
                                'ds_notification__icon',
                                hasInverseIcon && 'ds_notification__icon--inverse',
                                hasColourIcon && 'ds_notification__icon--colour'
                            ].join(' ')} aria-hidden="true">
                            <Icon icon={icon} />
                        </span>
                    }

                    <div className="ds_notification__text">
                        {content}
                    </div>

                    {isDismissable &&
                        <button type="button" className="ds_notification__close js-close-notification">
                            <ScreenReaderText>Close this notification</ScreenReaderText>
                            <Icon isFilled icon="Close" aria-hidden="true" />
                        </button>
                    }

                    {buttons}
                </div>
            </div>
        </div>
    );
};

AbstractNotificationBanner.displayName = 'AbstractNotificationBanner';
AbstractNotificationBanner.Buttons = Buttons;
Buttons.displayName = 'Buttons';

export default AbstractNotificationBanner;
