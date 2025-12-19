import { AbstractNotificationBannerProps } from '../../common/AbstractNotificationBanner/types';
declare const CookieBanner: {
    ({ children, className, title, ...props }: AbstractNotificationBannerProps): import("react").JSX.Element;
    displayName: string;
    Buttons: {
        ({ children }: import("../../common/AbstractNotificationBanner/types").AbstractNotificationBannerButtonsProps): import("react").JSX.Element;
        displayName: string;
    };
};
export default CookieBanner;
