"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Wraps all children in a specified HTML tag if a condition is met.
 */
const ConditionalWrapper = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;
ConditionalWrapper.displayName = 'ConditionalWrapper';
exports.default = ConditionalWrapper;
