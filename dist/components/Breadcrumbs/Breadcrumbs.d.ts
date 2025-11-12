declare const Breadcrumbs: {
    ({ children, ...props }: SGDS.Component.Breadcrumbs): import("react").JSX.Element;
    displayName: string;
    Item: {
        ({ children, isHidden, href, linkComponent, ...props }: SGDS.Component.Breadcrumbs.Item): import("react").JSX.Element;
        displayName: string;
    };
};
export default Breadcrumbs;
