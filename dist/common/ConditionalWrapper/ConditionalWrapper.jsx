"use strict";
/**
 * Wraps all children in a specified HTML tag if a condition is met.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ConditionalWrapper = ({ condition, wrapper, children }) => {
    return condition ? wrapper(children) : children;
};
ConditionalWrapper.displayName = 'ConditionalWrapper';
exports.default = ConditionalWrapper;
