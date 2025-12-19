import { SequentialNavigationLinkProps, SequentialNavigationProps } from "./types";
declare const SequentialNavigation: {
    ({ ariaLabel, children, className, ...props }: SequentialNavigationProps): import("react").JSX.Element;
    displayName: string;
    Next: {
        ({ children, href, linkComponent, textLabel }: SequentialNavigationLinkProps): import("react").JSX.Element;
        displayName: string;
    };
    Previous: {
        ({ children, href, linkComponent, textLabel }: SequentialNavigationLinkProps): import("react").JSX.Element;
        displayName: string;
    };
};
export default SequentialNavigation;
