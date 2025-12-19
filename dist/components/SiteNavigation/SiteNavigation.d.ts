import { SiteNavigationItemProps, SiteNavigationProps } from "./types";
declare const SiteNavigation: {
    ({ children, className, ...props }: SiteNavigationProps): import("react").JSX.Element;
    displayName: string;
    Item: {
        ({ children, isCurrent, href, linkComponent }: SiteNavigationItemProps): import("react").JSX.Element;
        displayName: string;
    };
};
export default SiteNavigation;
