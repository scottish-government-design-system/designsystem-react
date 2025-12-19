import { AbstractNotificationBannerProps } from '../../common/AbstractNotificationBanner/types';
declare const NotificationBanner: {
    ({ children, className, hasColourIcon, hasIcon, hasInverseIcon, isDismissable, title, ...props }: AbstractNotificationBannerProps): import("react").JSX.Element;
    displayName: string;
    Buttons: {
        ({ children }: import("../../common/AbstractNotificationBanner/types").AbstractNotificationBannerButtonsProps): import("react").JSX.Element;
        displayName: string;
    };
};
export default NotificationBanner;
