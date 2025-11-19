declare const SiteNavigation: {
    ({ children, className, ...props }: SGDS.Component.SiteNavigation): import("react").JSX.Element;
    displayName: string;
    Item: {
        ({ children, isCurrent, href, linkComponent }: SGDS.Component.SiteNavigation.Item): import("react").JSX.Element;
        displayName: string;
    };
};
export default SiteNavigation;
