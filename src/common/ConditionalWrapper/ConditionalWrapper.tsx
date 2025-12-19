/**
 * Wraps all children in a specified HTML tag if a condition is met.
 */

import { ConditionalWrapperProps } from "./types";

const ConditionalWrapper = ({
    condition,
    wrapper,
    children
}: ConditionalWrapperProps) => {
    return condition ? wrapper(children as React.JSX.Element) : children;
};

ConditionalWrapper.displayName = 'ConditionalWrapper';

export default ConditionalWrapper;
