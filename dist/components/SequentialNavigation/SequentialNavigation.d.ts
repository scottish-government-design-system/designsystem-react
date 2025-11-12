declare const SequentialNavigation: {
    ({ ariaLabel, children, className, ...props }: SGDS.Component.SequentialNavigation): import("react").JSX.Element;
    displayName: string;
    Next: {
        ({ children, href, linkComponent, textLabel }: SGDS.Component.SequentialNavigation.Link): import("react").JSX.Element;
        displayName: string;
    };
    Previous: {
        ({ children, href, linkComponent, textLabel }: SGDS.Component.SequentialNavigation.Link): import("react").JSX.Element;
        displayName: string;
    };
};
export default SequentialNavigation;
