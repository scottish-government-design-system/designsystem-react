declare const NotificationBanner: {
    ({ children, className, hasColourIcon, hasIcon, hasInverseIcon, isDismissable, title, ...props }: SGDS.Common.AbstractNotificationBanner): import("react").JSX.Element;
    displayName: string;
    Buttons: {
        ({ children }: SGDS.Common.AbstractNotificationBanner.Buttons): import("react").JSX.Element;
        displayName: string;
    };
};
export default NotificationBanner;
