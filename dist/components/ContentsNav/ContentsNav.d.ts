import React from 'react';
import { ContentsNavItemProps, ContentsNavProps } from './types';
declare const ContentsNav: {
    ({ ariaLabel, children, className, title, ...props }: ContentsNavProps): React.JSX.Element;
    displayName: string;
    Item: {
        ({ children, isCurrent, href, linkComponent }: ContentsNavItemProps): React.JSX.Element;
        displayName: string;
    };
};
export default ContentsNav;
