import { AbstractNotificationBannerProps, AbstractNotificationBannerButtonsProps } from './types';
declare const AbstractNotificationBanner: {
    ({ children, className, hasColourIcon, hasInverseIcon, icon, isDismissable, title, ...props }: AbstractNotificationBannerProps): import("react").JSX.Element;
    displayName: string;
    Buttons: {
        ({ children }: AbstractNotificationBannerButtonsProps): import("react").JSX.Element;
        displayName: string;
    };
};
export default AbstractNotificationBanner;
