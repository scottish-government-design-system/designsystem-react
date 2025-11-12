/**
 * Wraps all children in a specified HTML tag.
 */
declare const WrapperTag: {
    ({ children, tagName, ...props }: SGDS.Common.WrapperTag): import("react").JSX.Element;
    displayName: string;
};
export default WrapperTag;
