/**
 * Wraps all children in a specified HTML tag.
 */
import React from 'react';
import { WrapperTagProps } from './types';

const WrapperTag = ({
    children,
    tagName = 'div',
    ...props
}: WrapperTagProps) => {
    return React.createElement(tagName, props, children);
};

WrapperTag.displayName = 'WrapperTag';

export default WrapperTag;
