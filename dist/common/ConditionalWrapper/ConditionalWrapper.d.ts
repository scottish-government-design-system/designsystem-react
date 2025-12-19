/**
 * Wraps all children in a specified HTML tag if a condition is met.
 */
import { ConditionalWrapperProps } from "./types";
declare const ConditionalWrapper: {
    ({ condition, wrapper, children }: ConditionalWrapperProps): string | number | bigint | boolean | Iterable<import("react").ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").ReactPortal | Iterable<import("react").ReactNode> | null | undefined> | import("react").JSX.Element | null | undefined;
    displayName: string;
};
export default ConditionalWrapper;
