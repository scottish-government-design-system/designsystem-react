/**
 * Wraps all children in a specified HTML tag if a condition is met.
 */
declare const ConditionalWrapper: {
    ({ condition, wrapper, children }: SGDS.Common.ConditionalWrapper): any;
    displayName: string;
};
export default ConditionalWrapper;
