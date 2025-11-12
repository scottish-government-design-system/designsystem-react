declare const SideNavigation: {
    ({ ariaLabel, children, className, ...props }: SGDS.Component.SideNavigation): import("react").JSX.Element;
    displayName: string;
    Item: {
        ({ children, href, isCurrent, linkComponent, title }: SGDS.Component.SideNavigation.Item): import("react").JSX.Element;
        displayName: string;
    };
    List: {
        ({ children, isRoot }: SGDS.Component.SideNavigation.List): import("react").JSX.Element;
        displayName: string;
    };
};
export default SideNavigation;
