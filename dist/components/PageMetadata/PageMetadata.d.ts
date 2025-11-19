declare const Metadata: {
    ({ children, className, isInline, ...props }: SGDS.Component.Metadata): import("react").JSX.Element;
    displayName: string;
    Item: {
        ({ children, className, name, ...props }: SGDS.Component.Metadata.Item): import("react").JSX.Element;
        displayName: string;
    };
};
export default Metadata;
