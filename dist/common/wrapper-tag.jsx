"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Wraps all children in a specified HTML tag.
 */
const WrapperTag = ({ children, tagName = 'div', ...props }) => {
    const TagName = tagName;
    return <TagName {...props}>{children}</TagName>;
};
WrapperTag.displayName = 'WrapperTag';
exports.default = WrapperTag;
