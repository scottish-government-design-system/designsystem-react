import React from 'react';
import { AccordionItemProps, AccordionProps } from './types';
declare const Accordion: {
    ({ children, className, headingLevel, hideOpenAll, isSmall, ...props }: AccordionProps): React.JSX.Element;
    displayName: string;
    Item: {
        ({ children, className, id: rawId, isOpen, heading, title, ...props }: AccordionItemProps): React.JSX.Element;
        displayName: string;
    };
};
export default Accordion;
