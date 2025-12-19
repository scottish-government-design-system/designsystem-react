import React from 'react';
import { SkipLinksLinkProps, SkipLinksProps } from './types';
declare const SkipLinks: {
    ({ children, mainContentId, mainLinkText, isStatic, ...props }: SkipLinksProps): React.JSX.Element;
    displayName: string;
    Link: {
        ({ children, fragmentId }: SkipLinksLinkProps): React.JSX.Element;
        displayName: string;
    };
};
export default SkipLinks;
