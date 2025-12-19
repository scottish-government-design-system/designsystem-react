import { MetdataItemProps, MetadataProps } from "./types";
declare const Metadata: {
    ({ children, className, isInline, ...props }: MetadataProps): import("react").JSX.Element;
    displayName: string;
    Item: {
        ({ children, className, name, ...props }: MetdataItemProps): import("react").JSX.Element;
        displayName: string;
    };
};
export default Metadata;
