import { BreadcrumbItemProps } from "./types";
declare const Breadcrumbs: {
    ({ children, ...props }: React.AllHTMLAttributes<HTMLElement>): import("react").JSX.Element;
    displayName: string;
    Item: {
        ({ children, isHidden, href, linkComponent, ...props }: BreadcrumbItemProps): import("react").JSX.Element;
        displayName: string;
    };
};
export default Breadcrumbs;
