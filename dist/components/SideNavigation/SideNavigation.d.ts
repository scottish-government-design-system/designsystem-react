import { SideNavigationItemProps, SideNavigationListProps, SideNavigationProps } from './types';
declare const SideNavigation: {
    ({ ariaLabel, children, className, ...props }: SideNavigationProps): import("react").JSX.Element;
    displayName: string;
    Item: {
        ({ children, href, isCurrent, linkComponent, title }: SideNavigationItemProps): import("react").JSX.Element;
        displayName: string;
    };
    List: {
        ({ children, isRoot }: SideNavigationListProps): import("react").JSX.Element;
        displayName: string;
    };
};
export default SideNavigation;
